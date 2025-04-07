"use client";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";
import { useState } from "react";
import Link from "next/link";
import { commands } from "@uiw/react-md-editor";
import NewBlogPost from "../../../lib/newBlogPost";
import Header from "../components/Header";

const MDEditor = dynamic(
  () => import("@uiw/react-md-editor").then((mod) => mod.default),
  { ssr: false }
);
const EditerMarkdown = dynamic(
  () =>
    import("@uiw/react-md-editor").then((mod) => {
      return mod.default.Markdown;
    }),
  { ssr: false }
);

const NewPost = () => {
  const [content, setContent] = useState("**Hello world!!!**");
  const [title, setTitle] = useState("");

  return (
    <div className="w-full flex justify-center items-center flex-col gap-10 p-[50px]">
      <Header />
      <Link className="" href="/">
        Back
      </Link>
      <input
        type="text"
        className="p-1"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        onClick={() => NewBlogPost({ title, content })}
        className="px-3 py-2 border border-dlog-orange rounded-[10px] bg-dlog-cream text-dlog-darkgray font-bold"
      >
        Submit Post
      </button>
      <div className="w-full flex justify-center gap-10 p-10">
        <MDEditor
          className="w-[50%]"
          value={content}
          // @ts-expect-error idk
          onChange={setContent}
          commands={[commands.divider]}
        />
        <EditerMarkdown
          className="w-[50%] p-10 flex flex-col rounded-[15px] border border-dlog-cream"
          source={content}
        />
      </div>
    </div>
  );
};

export default NewPost;
