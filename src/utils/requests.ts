import { Inputs } from "@/components/MeetUpForm";
import axios from "axios";

export const getMeetUps = async () => {
  try {
    const response = await axios.get("http://localhost:3002/api/meet");
    const data: Inputs[] = response.data;
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
