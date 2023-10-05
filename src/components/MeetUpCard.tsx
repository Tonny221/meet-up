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

const MeetUpCard = ({ uuid, title, image }: Props) => {
  return (
    <Card className="col-span-4 md:col-span-1">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Image
          src={image}
          width={350}
          height={200}
          className="mb-4"
          alt="Meet-image"
        />
      </CardContent>
      <CardFooter>
        <Link href={"/meet-ups/" + uuid}>
          <Button>View</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default MeetUpCard;
