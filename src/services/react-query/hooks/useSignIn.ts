import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import {
  Auth,
  signInWithEmailAndPassword,
  UserCredential,
} from "firebase/auth";

export type SignInForm = {
  email: string;
  password: string;
};

export type SignInParams = {
  auth: Auth;
} & SignInForm;

export const useSignIn = () => {
  return useMutation<UserCredential, AxiosError, SignInParams>(
    ({ email, password, auth }) =>
      signInWithEmailAndPassword(auth, email, password)
  );
};
