/** @format */

export type { ILogin, ISendOtp, IVerifyOtp } from "./authTypes.ts";

export interface IResponse<T> {
  statusCode: number;
  success: boolean;
  message: string;
  data: T;
}
