"use client";

import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";
import { useState } from "react";
import Link from "next/link";

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
  const [value, setValue] = useState("**Hello world!!!**");

  return (
    <div className="w-full flex justify-center items-center flex-col gap-10">
      beng
      <Link href="/">Back</Link>
      <div className="w-full flex justify-center gap-10 p-10">
        <MDEditor className="w-[50%]" value={value} onChange={setValue} />
        <EditerMarkdown className="w-[50%] p-10" source={value} />
      </div>
    </div>
  );
};

export default NewPost;
