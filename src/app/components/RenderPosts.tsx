"use client";
import FilterDate from "../../../lib/filterDate";
import { motion, AnimatePresence } from "motion/react";

const RenderPosts: React.FC<{
  posts: { id: string; content: string; created_at: string; title: string }[];
}> = ({ posts }) => {
  const data = posts;

  return (
    <div className="w-full max-w-[1025px] flex flex-wrap justify-start gap-[25px]">
      <AnimatePresence>
        {data.map((post, i) => {
          const date = FilterDate(post.created_at);

          return (
            <motion.a
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.2 }}
              key={post.id}
              href={`/blog/${post.title}`}
              className="relative group"
            >
              <div className="w-[500px] h-[75px] rounded-[15px] bg-dlog-darkgray p-2.5 flex flex-col items-center justify-between relative z-10 border border-dlog-lightgray transition-all duration-300 ease-in-out group-hover:shadow-xl">
                <p className="text-dlog-orange font-medium">{post.title}</p>
                <div className="w-full flex justify-end items-center">
                  <p className="text-xs leading-none text-dlog-lightgray">
                    {date}
                  </p>
                </div>
              </div>
              <span className=" transition-all duration-200 ease-in-out absolute group-hover:w-[calc(100%+4px)] group-hover:h-[calc(100%+4px)] w-[99%] h-[99%] bg-dlog-orange rounded-[15px] left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] z-0" />
            </motion.a>
          );
        })}
      </AnimatePresence>
    </div>
  );
};

export default RenderPosts;
