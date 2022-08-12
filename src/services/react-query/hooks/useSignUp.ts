import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import {
  createUserWithEmailAndPassword,
  getAuth,
  UserCredential,
} from "firebase/auth";

export type SignUpForm = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

export const useSignUp = () => {
  return useMutation<UserCredential, AxiosError, SignUpForm>(
    ({ email, password }) => {
      const auth = getAuth();
      return createUserWithEmailAndPassword(auth, email, password);
    }
  );
};
