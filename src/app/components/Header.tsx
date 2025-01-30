const Header = () => {
  return (
    <header
      className="
             w-full max-w-[1340px] mx-auto h-[100px] rounded-full relative flex group transition-all"
    >
      <div className="bg-dlog-darkgray w-full mx-auto h-[100px] rounded-full flex absolute -z-10 group-hover:-translate-y-[6px] group-hover:shadow-xl duration-300"></div>
      <span className="bg-dlog-lightgray w-[calc(100%+4px)] mx-auto h-[100px] rounded-full flex absolute top-[3px] left-[-2px] -z-20 group-hover:-translate-y-[2px] group-hover:shadow-xl duration-500" />
      <span className="bg-dlog-orange w-[calc(100%+4px)] mx-auto h-[100px] rounded-full flex absolute top-[6px] left-[-2px] -z-30 group-hover:translate-y-[2px] group-hover:shadow-lg duration-700" />
    </header>
  );
};

export default Header;
