import Link from "next/link";
import { Button } from "./ui/button";

type props = {
  children?: React.ReactNode;
};

const Aside = ({ children }: props) => {
  return (
    <aside className="p-4 hidden md:block bg-green-300">
      <Link href={"/meet-ups/create"}>
        <Button>Create new Meet Up</Button>
      </Link>
      {children}
    </aside>
  );
};

export default Aside;
