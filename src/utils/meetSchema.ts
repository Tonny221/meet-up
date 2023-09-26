import * as z from "zod";

const locationSchema = z.object({
  country: z
    .string({
      required_error: "Country is required",
      invalid_type_error: "Country must be a string",
    })
    .min(1, { message: "This field cannot be empty!" }),
  state: z
    .string({
      required_error: "State is required",
      invalid_type_error: "State must be a string",
    })
    .min(1, { message: "This field cannot be empty!" }),
  district: z
    .string({
      required_error: "District is required",
      invalid_type_error: "District must be a string",
    })
    .min(1, { message: "This field cannot be empty!" }),
  street: z
    .string({
      required_error: "Street is required",
      invalid_type_error: "Street must be a string",
    })
    .min(1, { message: "This field cannot be empty!" }),
  number: z
    .number({
      required_error: "Number is required",
      invalid_type_error: "Number must be a number",
    })
    .min(1, { message: "This field cannot be empty!" }),
  complement: z.string({
    required_error: "Complement is required",
    invalid_type_error: "Complement must be a string",
  }),
});

const formSchema = z.object({
  title: z
    .string({
      required_error: "Title is required",
      invalid_type_error: "Title must be a string",
    })
    .min(1, { message: "This field cannot be empty!" }),
  description: z
    .string({
      required_error: "Description is required",
      invalid_type_error: "Description must be a string",
    })
    .min(1, { message: "This field cannot be empty!" }),
  image: z.string({
    required_error: "Image is required",
    invalid_type_error: "Image must be a string",
  }),
  location: locationSchema,
});

export default formSchema;
