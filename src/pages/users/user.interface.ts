import { InferType } from "yup";

import { DataResponse } from "@/services/interface";
import { AxiosResponse } from "axios";
import { userSchema } from "./user.schema";

export interface UserData extends InferType<typeof userSchema> {}

export interface UserResponse
  extends AxiosResponse<DataResponse<UserData>, DataResponse<UserData>> {}
