import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

type params = {
  req: NextRequest;
  res: NextResponse;
};

export const POST = async ({ req }: params) => {
  console.log(req);
  const result = await prisma.meetUp.create({
    data: {
      title: "EU QUERO",
      description: "test2",
    },
  });
  // console.log(body);
  return NextResponse.json(result);
};
