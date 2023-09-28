import React from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";
import Link from "next/link";

type Props = {
  uuid: string;
  title: string;
  descritpion: string;
  image: string;
};

const MeetUpCard = ({ uuid, title, descritpion, image }: Props) => {
  return (
    <Card className="col-span-4 md:col-span-1">
      <CardHeader>
        <Image
          src={image}
          width={350}
          height={50}
          className="mb-4"
          alt="Meet-image"
        />
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{descritpion}</p>
      </CardContent>
      <CardFooter>
        <Link href={""}>
          <Button>View</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default MeetUpCard;
