import styled from "styled-components";
import { Icons } from "../assets";
import SearchBar from "./SearchBar";
import TopBarAvatar from "./TopBarAvatar";

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
  return (
    <Wrapper>
      <SearchBar />
      <WrapperRightContent>
        <Notification />
        <TopBarAvatar />
      </WrapperRightContent>
    </Wrapper>
  );
};

export default TopBar;
