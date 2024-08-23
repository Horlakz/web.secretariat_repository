import { userSchema } from "@/pages/users/user.schema";

export const loginSchema = userSchema.omit([
  "firstName",
  "lastName",
  "phoneNumber",
]);
export const registerSchema = userSchema;
