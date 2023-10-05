import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { Inputs } from "@/components/MeetUpForm";
import { Prisma } from "@prisma/client";

export const POST = async (req: Request) => {
  try {
    const data: Inputs = await req.json();

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
    if (req.nextUrl.searchParams.get("user")) {
      const id = req.nextUrl.searchParams.get("user");
      const meet = await prisma.meet.findUnique({
        where: {
          id: id!,
        },
        include: {
          location: true,
        },
      });

      // console.log(meet);

      return NextResponse.json(meet);
    }

    const result = await prisma.meet.findMany();
    // console.log(req.nextUrl);
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(error);
  }
};
