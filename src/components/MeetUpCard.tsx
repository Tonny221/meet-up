import React from "react";

type Props = {
  title: string;
  descritpion: string;
};

const MeetUpCard = ({ title, descritpion }: Props) => {
  return (
    <section className="bg-red-400">
      <h1>{title}</h1>
      <p>{descritpion}</p>
    </section>
  );
};

export default MeetUpCard;
