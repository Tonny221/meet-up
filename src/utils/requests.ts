import axios from "axios";

export const getMeetUps = async () => {
  try {
    const response = await axios.get("/api/meet");
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("ERROR: " + error);
  }
};
