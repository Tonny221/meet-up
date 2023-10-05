import { Inputs } from "@/components/MeetUpForm";
import prisma from "@/lib/prisma";
import api from "@/services/api";
import axios from "axios";

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

export const getMeet = async (uuid: string) => {
  try {
    const response = await api.get("api/meet", {
      params: {
        user: uuid,
      },
    });
    const data = response.data;
    // console.log(response.data);
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
