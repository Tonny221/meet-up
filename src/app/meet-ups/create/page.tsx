import MeetUpForm from "@/components/MeetUpForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const page = () => {
  return (
    <Card className="w-2/5 mx-auto">
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
