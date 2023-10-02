import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { Inputs } from "@/components/MeetUpForm";
import { Prisma } from "@prisma/client";

export const POST = async (req: Request) => {
  try {
    const data: Inputs = await req.json();
    // console.log(data);

    const result = await prisma.meet.create({
      data: {
        title: data.title,
        description: data.description,
        image: data.image,
        location: {
          create: {
            country: data.location.country,
            state: data.location.state,
            district: data.location.district,
            street: data.location.street,
            number: data.location.number,
            complement: data.location.complement,
          },
        },
      },
      include: {
        location: true,
      },
    });
    return NextResponse.json(result);
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        console.log("The value already exists");
      }
    }
    throw error;
  }
};

export const GET = async (req: NextRequest) => {
  try {
    const result = await prisma.meet.findMany();
    // console.log(req.nextUrl);
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(error);
  }
};
