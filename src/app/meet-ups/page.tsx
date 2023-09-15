import MeetUpCard from "@/components/MeetUpCard";
import MeetUpForm from "@/components/MeetUpForm";
import { getMeetUps } from "@/utils/requests";

const page = async () => {
  const data = await getMeetUps();

  return (
    <div>
      <MeetUpForm />
      {data.map((el) => {
        return (
          <MeetUpCard
            key={el.title}
            title={el.title}
            descritpion={el.description}
          />
        );
      })}
    </div>
  );
};

export default page;
