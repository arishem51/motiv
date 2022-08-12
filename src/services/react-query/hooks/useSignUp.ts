import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
  UserCredential,
} from "firebase/auth";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { genConfig } from "react-nice-avatar";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { firebaseDB } from "../../..";
import { CREATE_USER_ERROR, CREATE_USER_SUCCESS } from "../../../types";
import { generateImage } from "../../../utils/generateImageURL";
import { RouteNames } from "../../react-router";

export type SignUpForm = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

export const useSignUp = () => {
  const navigate = useNavigate();
  return useMutation<UserCredential, AxiosError, SignUpForm>(
    ({ email, password }) => {
      const auth = getAuth();
      return createUserWithEmailAndPassword(auth, email, password);
    },
    {
      onSuccess({ user }, variables) {
        toast.success(CREATE_USER_SUCCESS);
        navigate(RouteNames.DASHBOARD);
        const { email, firstName, lastName, password } = variables;
        const imageConfig = genConfig();
        setDoc(doc(firebaseDB, "users", email), {
          firstName,
          lastName,
          email,
          password,
          imageConfig,
        });
        updateProfile(user, {
          photoURL: generateImage(email),
          displayName: lastName + " " + firstName,
        });
      },
      onError() {
        toast.error(CREATE_USER_ERROR);
      },
    }
  );
};
