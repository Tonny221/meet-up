import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export const POST = async (req: Request) => {
  const data = await req.json();
  console.log(data);

  const result = await prisma.meet.create({
    data: {
      title: "teste",
      description: "",
      location: {
        connect: {
          country: "",
          state: "",
          district: "",
          street: "",
          number: "",
          complement: "",
        },
      },
    },
  });
  return NextResponse.json(result);
};

export const GET = async () => {
  try {
    const result = await prisma.meet.findMany();
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(error);
  }
};
