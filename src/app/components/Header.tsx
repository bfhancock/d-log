"use client";
import Link from "next/link";
import HeaderLogo from "./HeaderLogo";

const Header = () => {
  return (
    <header className="w-full max-w-[1340px] mx-auto h-[100px] rounded-full relative flex group transition-all z-0">
      <div className="bg-dlog-darkgray w-full mx-auto h-[100px] rounded-full flex absolute -z-10 group-hover:-translate-y-[2px] group-hover:shadow-xl duration-300 justify-between items-center pl-[75px] pr-[50px]">
        <HeaderLogo />

        <Link href="/" className="text-4xl font-semibold text-dlog-orange">
          D-Log
        </Link>

        <a className="z-50" href="/newPost">
          Thing
        </a>
      </div>

      <span className="bg-dlog-lightgray w-[calc(100%+4px)] mx-auto h-[100px] rounded-full flex justify-center items-center absolute top-[3px] left-[-2px] -z-20 group-hover:w-full group-hover:translate-x-[2px] group-hover:-translate-y-[-1px] group-hover:shadow-xl group-hover:opacity-75 duration-500"></span>

      <span className="bg-dlog-orange w-[calc(100%+4px)] mx-auto h-[100px] rounded-full flex absolute top-[6px] left-[-2px] -z-30 group-hover:translate-x-[3px] group-hover:w-[calc(100%-2px)] group-hover:translate-y-[4px] group-hover:shadow-lg group-hover:opacity-50 duration-700 justify-center items-center"></span>
    </header>
  );
};

export default Header;
