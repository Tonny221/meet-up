import { getMeet } from "@/utils/requests";
import Image from "next/image";
import React from "react";

type Props = {
  params: {
    meet: string;
  };
};

const Page = async ({ params }: Props) => {
  const meet: Meet = await getMeet(params.meet);

  return (
    <div className="p-4 md:flex justify-between">
      <div className="flex-1">
        <h1 className="font-bold text-2xl">{meet.title}</h1>
        <p className="my-4">{meet.description}</p>
        <Image src={meet.image} width={500} height={200} alt="meet-image" />
      </div>
      <div className="flex-auto self-center">
        <h3 className="font-bold text-xl mt-4">Location</h3>
        <div className="w-full border md:hidden border-black" />
        <div className="flex gap-4 justify-between my-4">
          <p className="font-bold text-lg">Country:</p>
          <p className="self-center">{meet.location?.country}</p>
        </div>
        <div className="flex gap-4 justify-between my-4">
          <p className="font-bold text-lg">State:</p>
          <p className="self-center">{meet.location?.state}</p>
        </div>
        <div className="flex gap-4 justify-between my-4">
          <p className="font-bold text-lg">District:</p>
          <p className="self-center">{meet.location?.district}</p>
        </div>
        <div className="flex gap-4 justify-between my-4">
          <p className="font-bold text-lg">Street:</p>
          <p className="self-center">{meet.location?.street}</p>
        </div>
        <div className="flex gap-4 justify-between my-4">
          <p className="font-bold text-lg">Number:</p>
          <p className="self-center">{meet.location?.number}</p>
        </div>
        <div className="flex gap-4 justify-between my-4">
          <p className="font-bold text-lg">Complement:</p>
          <p className="self-center">
            {meet.location?.complement === " "
              ? meet.location?.complement
              : "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
