import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
  User,
  UserCredential,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { genConfig } from "react-nice-avatar";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { firebaseDB } from "../../..";
import { CREATE_USER_ERROR, CREATE_USER_SUCCESS } from "../../../types";
import { Me } from "../../firebase/types";
import { RouteNames } from "../../react-router";

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

export type SignUpForm = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

export const useSignUp = () => {
  const navigate = useNavigate();
  return useMutation<void, AxiosError, SignUpForm>(
    async ({ email, password, lastName, firstName }) => {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const imageConfig = genConfig();
      await setDoc(doc(firebaseDB, "users", email), {
        firstName,
        lastName,
        email,
        password,
        imageConfig,
      });
      await updateProfile(userCredential.user, {
        displayName: lastName + " " + firstName,
      });
    },
    {
      onSuccess() {
        toast.success(CREATE_USER_SUCCESS);
        navigate(RouteNames.DASHBOARD);
      },
      onError() {
        toast.error(CREATE_USER_ERROR);
      },
    }
  );
};

type AuthStateChanged = {
  onAuthSuccess?: () => void;
  onAuthError?: () => void;
};

export const useAuthStateChanged = ({
  onAuthSuccess,
  onAuthError,
}: AuthStateChanged) => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const auth = getAuth();
  useEffect(() => {
    setIsLoading(true);
    const remove = onAuthStateChanged(auth, (user) => {
      if (user) {
        onAuthSuccess && onAuthSuccess();
        setUser(user);
      } else {
        onAuthError && onAuthError();
        setUser(null);
      }
      setIsLoading(false);
    });
    return () => {
      remove();
    };
  }, [auth, onAuthError, onAuthSuccess]);

  return { isLoading, user };
};
