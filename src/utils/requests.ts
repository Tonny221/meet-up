import { Inputs } from "@/components/MeetUpForm";
import prisma from "@/lib/prisma";

export interface data extends Inputs {
  id: string;
}

export const getMeetUps = async () => {
  try {
    const response = await prisma.meet.findMany();
    const data = response;
    // console.log(response.data);
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
