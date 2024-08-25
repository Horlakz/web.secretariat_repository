import { number, object, string } from "yup";

export const fileSchema = object({
  name: string().required().default(""),
  key: string().required().default(""),
  mime_type: string().required().default(""),
  size: number().required().default(0),
});
