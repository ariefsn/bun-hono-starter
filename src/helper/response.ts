import { IResponse } from "../models";

export const respOk = (data: any, message?: string): IResponse => ({
  data,
  status: true,
  message: message ?? ''
})

export const respErr = (message: string): IResponse => ({
  data: null,
  status: true,
  message
})