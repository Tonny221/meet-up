import Link from "next/link";
import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="p-4 bg-black flex justify-center">
      <nav className="hidden md:flex flex-row gap-8">
        <Link href={"/"} className="hover:underline text-xl">
          home
        </Link>
        <Link href={"/meet-ups"} className="hover:underline text-xl">
          meet ups
        </Link>
      </nav>
    </header>
  );
};

export default Header;
