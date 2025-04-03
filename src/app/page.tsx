import { getPostsData } from "../../lib/posts";
import Header from "./components/Header";
import RenderPosts from "./components/RenderPosts";

const Home = () => {
  const posts = getPostsData();

  return (
    <div className="w-full h-screen p-[50px] flex flex-col items-center">
      <Header />
      <div className="w-full max-w-[1340px] flex justify-between mt-[100px] p-5">
        <RenderPosts posts={posts} />
        <div className="border border-dlog-lightgray rounded-[15px] min-w-[225px]">
          Hello bengk
        </div>
      </div>
    </div>
  );
};

export default Home;
