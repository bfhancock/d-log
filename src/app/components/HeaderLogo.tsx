"use client";

import LogoOrange from "./headerLogo/LogoOrange";
import LogoWhite from "./headerLogo/LogoWhite";

const HeaderLogo = () => {
  return (
    <div className="relative">
      <LogoOrange className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] z-20" />
      <LogoWhite className="absolute top-1/2 left-1/2 -translate-x-[47%] -translate-y-[47%] z-10" />
    </div>
  );
};

export default HeaderLogo;
