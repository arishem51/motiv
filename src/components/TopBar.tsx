import { useQuery } from "@tanstack/react-query";
import { doc, Firestore, getDoc } from "firebase/firestore";
import styled from "styled-components";
import { Icons } from "../assets";
import { useAuth } from "../context/AuthProvider";
import Avatar from "./Avatar";
import SearchBar from "./SearchBar";

const Wrapper = styled.div`
  padding: var(--size-16) var(--size-32);
  background-color: var(--color-white);
  display: flex;
  justify-content: space-between;
`;

const WrapperRightContent = styled.div`
  display: flex;
  align-items: center;
  gap: var(--size-32);
`;

const Notification = styled(Icons.Notification)`
  cursor: pointer;
`;

type Props = {
  firebase: Firestore;
};

const TopBar = ({ firebase }: Props) => {
  const { user } = useAuth();
  const { data, isLoading } = useQuery<any>(
    ["user-avatar"],
    async () => {
      //cast type email
      const email = user?.email as string;
      const docRef = await doc(firebase, "users", email);
      return (await getDoc(docRef)).data();
    },
    {
      enabled: !!user?.email,
    }
  );

  return (
    <Wrapper>
      <SearchBar />
      <WrapperRightContent>
        <Notification />
        <Avatar isLoading={isLoading} imageConfig={data?.imageConfig} />
      </WrapperRightContent>
    </Wrapper>
  );
};

export default TopBar;
