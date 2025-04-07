"use client";

import Link from "next/link";
import LogoOrange from "./headerLogo/LogoOrange";
import LogoWhite from "./headerLogo/LogoWhite";

const HeaderLogo = () => {
  return (
    <Link href="/" className="relative">
      <LogoOrange className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] z-20" />
      <LogoWhite className="absolute top-1/2 left-1/2 -translate-x-[47%] -translate-y-[47%] z-10" />
    </Link>
  );
};

export default HeaderLogo;
