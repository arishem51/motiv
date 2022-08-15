import { UserCredential } from "firebase/auth";
import { AvatarFullConfig } from "react-nice-avatar";

type UserDatabase = {
  email: string;
  firstName: string;
  imageConfig: AvatarFullConfig;
  lastName: string;
  password: string;
};

export type Me = {
  userDB: UserDatabase;
  userFB: UserCredential;
};
