"use client";

import { Form, FormField } from "./ui/form";
import { SubmitHandler, useForm } from "react-hook-form";
import TextInput from "./TextInput";
import { Button } from "./ui/button";
import formSchema from "@/utils/meetSchema";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const MeetUpForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  type Inputs = {};

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <Form {...form}>
      <TextInput
        control={form.control}
        label="Title"
        placeholder="Type the meet up title"
        name="title"
      />
      <TextInput
        control={form.control}
        label="Description"
        placeholder="Type the meet up description"
        name="description"
      />
      <TextInput
        control={form.control}
        label="Image"
        placeholder="Type the meet up image URL"
        name="image"
      />
      <h1 className="text-xl font-bold my-4">Location</h1>
      <TextInput
        control={form.control}
        label="Country"
        placeholder="Type the meet up country"
        name="location"
      />
      <TextInput
        control={form.control}
        label="State"
        placeholder="Type the meet up state"
        name="location"
      />
      <TextInput
        control={form.control}
        label="District"
        placeholder="Type the meet up district"
        name="location"
      />
      <TextInput
        control={form.control}
        label="Street"
        placeholder="Type the meet up street"
        name="location"
      />
      <TextInput
        control={form.control}
        label="Number"
        placeholder="Type the meet up number"
        name="location"
      />
      <TextInput
        control={form.control}
        label="Complement"
        placeholder="Type the meet up location complement"
        name="location"
      />
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default MeetUpForm;
