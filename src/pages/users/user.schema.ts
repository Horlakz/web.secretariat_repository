import { object, string } from "yup";

export const userSchema = object({
  firstName: string().default(""),
  lastName: string().default(""),
  email: string().email().required().default(""),
  phoneNumber: string().default(""),
  password: string().min(6).required().default(""),
});
