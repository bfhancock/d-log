import Link from "next/link";
import Markdown from "react-markdown";
import Header from "@/app/components/Header";
import supabase from "../../../../lib/supabase";

const Page: React.FC<{ params: Promise<{ slug: string }> }> = async ({
  params,
}) => {
  const { slug } = await params;

  const { data } = await supabase.from("posts").select().eq("title", slug);

  const post = data[0];

  return (
    <div className="w-full flex justify-center gap-5 p-[50px] flex-col items-center">
      <Header />
      <div className="w-full max-w-[1340px] gap-5 flex mt-[100px]">
        <div className="w-[75%] border border-dlog-lightgray rounded-[15px] p-4">
          <Markdown>{post?.content}</Markdown>
        </div>
        <div className="w-[25%] border border-dlog-orange rounded-[15px] h-full p-5">
          <Link href="/">Back</Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
