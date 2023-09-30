import { Inputs } from "@/components/MeetUpForm";
import api from "@/services/api";

export interface data extends Inputs {
  id: string;
}

export const getMeetUps = async () => {
  try {
    const response = await api.get("api/meet");
    const data: data[] = response.data;
    // console.log(response.data);
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
