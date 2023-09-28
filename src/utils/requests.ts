import { Inputs } from "@/components/MeetUpForm";
import api from "@/services/api";

export const getMeetUps = async () => {
  try {
    const response = await api.get("api/meet");
    const data: Inputs[] = response.data;
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
