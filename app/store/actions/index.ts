import { Dispatch } from "@reduxjs/toolkit";
import { setError, stopLoad } from "../slices/appSlice";

export interface ApiError {
  response?: {
    data: {
      customMessage?: string;
      message?: string;
      statusCode?: number;
      [key: string]: unknown;
    };
  };
  data?: {
    message?: string;
  };
}

export const handleError = (err: unknown, dispatch: Dispatch) => {
  const error = err as ApiError;

  // Handle non-server-based errors
  if (!error.response && !error.data) {
    dispatch(setError("There seems to be an issue currently, please try again"));
  } else if (!error.response) {
    dispatch(setError(error.data?.message || "An error occurred"));
  } 
  // Handle server-based errors
  else {
    let msg =
      error.response.data.customMessage ||
      error.response.data.message ||
      (error.response.data as unknown);

    // Handle array-like errors
    if (typeof msg === "object" && Array.isArray(msg)) {
      msg = msg.reduce((aggr: string, errObj: { msg: string }) => aggr + errObj.msg + ",", "");
    }

    dispatch(setError(String(msg)));
    dispatch(stopLoad());
  }

  // Handle unauthorized error
  if (error.response?.data?.statusCode === 401) {
    localStorage.clear();
  }

  throw err;
};


export {
  loginUser
} from './authAction'