import { AuthErrorCodes } from "firebase/auth";
import { INVALID_PASSWORD, SIGN_IN_ERROR, USER_NOT_FOUND } from "../types";

const ERROR = {
  [AuthErrorCodes.INVALID_PASSWORD]: INVALID_PASSWORD,
  [AuthErrorCodes.USER_DELETED]: USER_NOT_FOUND,
} as any;

export const resolveSignInError = (errorCode?: string) => {
  if (!errorCode) {
    return SIGN_IN_ERROR;
  }
  return ERROR[errorCode];
};
