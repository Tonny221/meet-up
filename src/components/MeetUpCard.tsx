import React from "react";

type Props = {
  title: string;
  descritpion: string;
};

const MeetUpCard = ({ title, descritpion }: Props) => {
  return (
    <section className="border-solid border-black border rounded-xl col-span-1">
      <h1 className="text-center">{title}</h1>
      <div className="p-4">
        <p>{descritpion}</p>
      </div>
    </section>
  );
};

export default MeetUpCard;
