const Header = () => {
  return (
    <header
      className="
             w-full max-w-[1340px] mx-auto h-[100px] rounded-full relative flex group transition-all"
    >
      <div className="bg-dlog-darkgray w-full mx-auto h-[100px] rounded-full flex absolute -z-10 group-hover:-translate-y-[2px] group-hover:shadow-xl duration-300 justify-center">
        {" "}
        <span className="w-[5px] h-full bg-pink-600" />
      </div>
      <span className="bg-dlog-lightgray w-[calc(100%+4px)] mx-auto h-[100px] rounded-full flex justify-center items-center absolute top-[3px] left-[-2px] -z-20 group-hover:w-full group-hover:translate-x-[2px] group-hover:-translate-y-[-1px] group-hover:shadow-xl duration-500">
        <span className="w-[5px] h-full bg-pink-600" />
      </span>
      <span className="bg-dlog-orange w-[calc(100%+4px)] mx-auto h-[100px] rounded-full flex absolute top-[6px] left-[-2px] -z-30 group-hover:translate-x-[3px] group-hover:w-[calc(100%-2px)] group-hover:translate-y-[4px] group-hover:shadow-lg duration-700 justify-center items-center">
        <span className="w-[5px] h-full bg-pink-600" />
      </span>
    </header>
  );
};

export default Header;
