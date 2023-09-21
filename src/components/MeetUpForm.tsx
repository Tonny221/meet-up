"use client";

import { Form, FormField } from "./ui/form";
import { useForm } from "react-hook-form";
import TextInput from "./TextInput";

const MeetUpForm = () => {
  const form = useForm();

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
        name="descritpion"
      />
      <TextInput
        control={form.control}
        label="Image"
        placeholder="Type the meet up image URL"
        name="image"
      />
    </Form>
  );
};

export default MeetUpForm;
