import MeetUpForm from "@/components/MeetUpForm";
import { getMeetUps } from "@/utils/requests";

const page = async () => {
  const data = await getMeetUps();

  return (
    <div>
      <MeetUpForm />
    </div>
  );
};

export default page;
