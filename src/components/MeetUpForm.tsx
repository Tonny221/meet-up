"use client";

import api from "@/services/api";
import { ChangeEvent, useState } from "react";
import { Form } from "./ui/form";
import { useForm } from "react-hook-form";

const MeetUpForm = () => {
  const [meetUp, setMeetUp] = useState({ title: "", description: "" });
  const form = useForm();

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      await api.post("api/meet", meetUp);
    } catch (error) {
      console.error(error);
    }
  };

  const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setMeetUp({
      ...meetUp,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form className="border-solid border-black" onSubmit={submitData}>
      <h1>Create new meet up</h1>
      <input
        type="text"
        name="title"
        placeholder="title"
        onChange={changeValue}
        value={meetUp.title}
      />
      <input
        name="description"
        type="text"
        placeholder="description"
        onChange={changeValue}
        value={meetUp.description}
      />
      <input type="submit" onChange={changeValue} value="Create" />
    </form>
  );
};

export default MeetUpForm;
