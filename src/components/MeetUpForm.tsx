"use client";

import axios from "axios";
import { ChangeEvent, useState } from "react";

const MeetUpForm = () => {
  const [meetUp, setMeetUp] = useState({ title: "", description: "" });

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      await axios.post("api/meetUp", meetUp);
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
        placeholder="title"
        onChange={(e) => {}}
        value={meetUp.title}
      />
      <input
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
