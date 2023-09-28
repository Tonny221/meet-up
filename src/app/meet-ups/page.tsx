import Aside from "@/components/Aside";
import MeetUpCard from "@/components/MeetUpCard";
import { Inputs } from "@/components/MeetUpForm";
import { getMeetUps } from "@/utils/requests";
import Link from "next/link";

const page = async () => {
  const data: Inputs[] = await getMeetUps();
  console.log(data);
  return (
    <div className="flex">
      <div className="p-4 flex-1 grid grid-cols-4 gap-8">
        {data.map((el) => {
          return (
            <MeetUpCard
              key={el.title}
              title={el.title}
              descritpion={el.description}
              image={el.image}
            />
          );
        })}
      </div>
      <Aside />
    </div>
  );
};

export default page;
