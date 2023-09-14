import Link from "next/link";
import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="p-4 flex justify-center">
      <nav className="flex flex-row gap-8">
        <Link href={"/"} className="hover:underline">
          home
        </Link>
        <Link href={"/meet-ups"} className="hover:underline">
          meet ups
        </Link>
      </nav>
    </header>
  );
};

export default Header;
