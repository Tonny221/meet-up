import axios from "axios";

export type MeetUp = {
  title: string;
  description: string;
};

export const getMeetUps = async () => {
  try {
    const response = await axios.get("http://localhost:3000/api/meet");
    const data: MeetUp[] = response.data;
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
