"use client";
import React from "react";
import { useSearchParams } from "next/navigation";

type Props = {
  params: {
    meet: string;
  };
};

const Page = ({ params }: Props) => {
  const searchParams = useSearchParams();

  const uuid = searchParams.get("meet");

  return (
    <div>
      <h1>{params.meet}</h1>
      <h1>{uuid}</h1>
    </div>
  );
};

export default Page;
