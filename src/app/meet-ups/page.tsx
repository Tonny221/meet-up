import Aside from "@/components/Aside";
import MeetUpCard from "@/components/MeetUpCard";
import MeetUpForm from "@/components/MeetUpForm";
import { getMeetUps } from "@/utils/requests";
import Link from "next/link";

const page = async () => {
  const data = await getMeetUps();

  return (
    <div className="flex">
      <div className="p-4 flex-1 grid grid-cols-4 gap-8">
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
      <Aside />
    </div>
  );
};

export default page;
