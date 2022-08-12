import styled from "styled-components";
import { Icons } from "../assets";
import Avatar from "./Avatar";
import SearchBar from "./SearchBar";
import imageSrc from "../assets/exampleAvatar.jpg";
import { useAuth } from "../context/AuthProvider";
import { generateImage } from "../utils/generateImageURL";

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

const TopBar = () => {
  const { user } = useAuth();

  console.log(user?.photoURL);

  return (
    <Wrapper>
      <SearchBar />
      <WrapperRightContent>
        <Notification />
        <Avatar src={user?.photoURL || generateImage(user?.email)} />
      </WrapperRightContent>
    </Wrapper>
  );
};

export default TopBar;
