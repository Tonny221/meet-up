import MeetUpCard from "@/components/MeetUpCard";
import MeetUpForm from "@/components/MeetUpForm";
import { getMeetUps } from "@/utils/requests";

const page = async () => {
  const data = await getMeetUps();

  return (
    <div>
      <MeetUpForm />
      <div className="p-4 grid grid-cols-4 gap-8">
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
    </div>
  );
};

export default page;
