import { Suspense } from "react";
import Header from "./components/Header";
import RenderPosts from "./components/RenderPosts";
import supabase from "../../lib/supabase";

type Posts = Array<{
  id: string;
  content: string;
  created_at: string;
  title: string;
}>;

const Home = async () => {
  const { data } = await supabase.from("posts").select();

  const typedData: Posts = data ?? [];

  return (
    <div className="w-full h-screen p-[50px] flex flex-col items-center">
      <Header />
      <div className="w-full max-w-[1340px] flex justify-between mt-[100px] p-5">
        <Suspense
          fallback={
            <p className="text-3xl text-dlog-orange font-bold">Loading Beng</p>
          }
        >
          <RenderPosts posts={typedData} />
        </Suspense>
        <div className="border border-dlog-lightgray rounded-[15px] min-w-[225px] flex justify-center items-center">
          Hello bengk
        </div>
      </div>
    </div>
  );
};

export default Home;
