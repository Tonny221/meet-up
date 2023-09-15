import React from "react";
import { Button } from "./ui/button";

type Props = {
  title: string;
  descritpion: string;
};

const MeetUpCard = ({ title, descritpion }: Props) => {
  return (
    <section className="border-solid border-black border p-4 rounded-xl flex flex-col gap-4 col-span-1">
      <h1 className="text-center">{title}</h1>
      <p>{descritpion}</p>
      <Button>View</Button>
    </section>
  );
};

export default MeetUpCard;
