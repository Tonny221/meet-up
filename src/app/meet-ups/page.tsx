import Aside from "@/components/Aside";
import MeetUpCard from "@/components/MeetUpCard";
import { data, getMeetUps } from "@/utils/requests";

const page = async () => {
  const data: data[] = await getMeetUps();
  return (
    <div className="flex flex-col-reverse md:flex-row">
      <div className="p-4 flex-1 grid grid-cols-4 gap-8">
        {data.map((el) => {
          return (
            <MeetUpCard
              uuid={el.id}
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
