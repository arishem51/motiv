import { useQuery } from "@tanstack/react-query";
import { doc, getDoc } from "firebase/firestore";
import { firebaseDB } from "..";
import { useAuth } from "../context/AuthProvider";
import Avatar from "./Avatar";

const TopBarAvatar = () => {
  const { user } = useAuth();
  const { data: userDB, isLoading } = useQuery<any>(
    ["user-avatar"],
    async () => {
      //cast type email
      const email = user?.email as string;
      const docRef = await doc(firebaseDB, "users", email);
      return (await getDoc(docRef)).data();
    },
    {
      enabled: !!user?.email,
    }
  );
  return <Avatar isLoading={isLoading} imageConfig={userDB?.imageConfig} />;
};

export default TopBarAvatar;
