import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import {
  getAuth,
  signInWithEmailAndPassword,
  UserCredential,
} from "firebase/auth";

export type SignInForm = {
  email: string;
  password: string;
};

export const useSignIn = () => {
  return useMutation<UserCredential, AxiosError, SignInForm>(
    ({ email, password }) => {
      const auth = getAuth();
      return signInWithEmailAndPassword(auth, email, password);
    }
  );
};
