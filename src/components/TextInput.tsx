import React from "react";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Control } from "react-hook-form";

type formSchema = {
  title: string;
  description: string;
  image: string;
  location: {
    number: number;
    country: string;
    state: string;
    district: string;
    street: string;
    complement: string;
  };
};

type control = Control<formSchema, any>;

type name = keyof formSchema;

type Props = {
  name: name;
  label: string;
  placeholder: string;
  description?: string;
  control: control;
};

const TextInput = ({
  name,
  label,
  placeholder,
  description,
  control,
}: Props) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            {/* Here's the problem */}
            <Input {...field} placeholder={placeholder} />
          </FormControl>
          <FormDescription>{description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default TextInput;
