import { useQuery } from "@tanstack/react-query";
import { getAuth } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import RAvatar from "react-nice-avatar";
import { SyncLoader } from "react-spinners";
import styled from "styled-components";
import { firebaseDB } from "..";
import { useAuth } from "../context/AuthProvider";

const SIZE = 48;

const Wrapper = styled.div`
  width: ${SIZE}px;
  height: ${SIZE}px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 50%;
  cursor: pointer;
`;

const Avatar = () => {
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
  return (
    <Wrapper>
      {isLoading ? (
        <SyncLoader size={6} color="var(--color-orange)" />
      ) : (
        <RAvatar
          style={{ width: SIZE + "px", height: SIZE + "px" }}
          {...userDB.imageConfig}
        />
      )}
    </Wrapper>
  );
};

export default Avatar;
