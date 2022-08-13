import { useQuery } from "@tanstack/react-query";
import { doc, getDoc } from "firebase/firestore";
import { firebaseDB } from "..";
import { useAuth } from "../context/AuthProvider";
import Avatar from "./Avatar";

const TopBarAvatar = () => {
  const { user } = useAuth();
  const { data, isLoading } = useQuery<any>(
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

  return <Avatar isLoading={isLoading} imageConfig={data?.imageConfig} />;
};

export default TopBarAvatar;
