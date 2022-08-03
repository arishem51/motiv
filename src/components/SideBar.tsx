import styled from "styled-components";
import { Icons } from "../assets";

type Props = {
  listItem: [];
};

const Wrapper = styled.div`
  height: 100vh;
  padding: var(--size-24) var(--size-30);
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  flex: 1;
`;

const SideBar = () => {
  return (
    <Wrapper>
      <Icons.Logo />
      <Content></Content>
    </Wrapper>
  );
};

export default SideBar;
