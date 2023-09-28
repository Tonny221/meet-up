import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "./ui/dropdown-menu";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="p-4 md:bg-transparent flex md:justify-center justify-end">
      <nav className="hidden md:flex flex-row gap-8">
        <Link href={"/"} className="hover:underline text-xl">
          home
        </Link>
        <Link href={"/meet-ups"} className="hover:underline text-xl">
          meet ups
        </Link>
      </nav>
      <menu>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Image
              src={"/icons/menu-burger.svg"}
              alt="menu icon"
              width={32}
              height={32}
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Pages</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href={"/"}>home</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={"/meet-ups"}>meet ups</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </menu>
    </header>
  );
};

export default Header;
