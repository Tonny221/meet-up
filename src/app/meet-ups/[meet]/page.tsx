import React from "react";

type Props = {
  params: {
    meet: string;
  };
};

const page = ({ params }: Props) => {
  return (
    <div>
      <h1>{params.meet}</h1>
    </div>
  );
};

export default page;
