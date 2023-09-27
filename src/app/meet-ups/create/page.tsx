import MeetUpForm from "@/components/MeetUpForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const page = () => {
  return (
    <Card className="md:w-2/5 mx-auto mb-8 border-none shadow-none md:border md:shadow-xl">
      <CardHeader>
        <CardTitle>Create new meet up</CardTitle>
      </CardHeader>
      <CardContent>
        <MeetUpForm />
      </CardContent>
    </Card>
  );
};

export default page;
