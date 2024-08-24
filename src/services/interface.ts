export interface MessageResponse {
  status: number;
  message: string;
}

export interface DataResponse<T> extends MessageResponse {
  data: T;
}

interface Result<T> {
  result: T;
}

export interface ResultReponse<T> extends DataResponse<Result<T>> {}
