import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export const POST = async (req: Request) => {
  const data = await req.json();

  const result = await prisma.meetUp.create({
    data: data,
  });
  return NextResponse.json(result);
};

export const GET = async () => {
  try {
    const result = await prisma.meetUp.findMany();
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(error);
  }
};
