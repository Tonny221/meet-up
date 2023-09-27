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

type Props = {
  title: string;
  descritpion: string;
  image: string;
};

const MeetUpCard = ({ title, descritpion, image }: Props) => {
  return (
    <Card className="col-span-1">
      <CardHeader>
        <Image src={image} width={350} height={50} alt="Meet-image" />
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{descritpion}</p>
      </CardContent>
      <CardFooter>
        <Button>View</Button>
      </CardFooter>
    </Card>
  );
};

export default MeetUpCard;
