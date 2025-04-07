"use server";
import supabase from "./supabase";

const NewBlogPost = async ({
  title,
  content,
}: {
  title: string;
  content: string;
}) => {
  console.log(title, content, "SENT");
  const { error } = await supabase.from("posts").insert({ title, content });
  if (error) {
    console.log(error);
  }
};

export default NewBlogPost;
