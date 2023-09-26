"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "./ui/button";
import formSchema from "@/utils/meetSchema";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./ui/input";

const MeetUpForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  type Inputs = {};

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <Form {...form}>
      <span>{JSON.stringify(form.control._formValues)}</span>

      <h1 className="text-xl font-bold my-4">Location</h1>
      <FormField
        control={form.control}
        name="location.country"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Country</FormLabel>
            <FormControl>
              <Input placeholder="type the meet up country" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default MeetUpForm;
