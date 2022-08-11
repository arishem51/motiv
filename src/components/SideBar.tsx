import styled from "styled-components";
import { Icons } from "../assets";
import SideBarItem, { SideBarItemProps } from "./SideBarItem";

type Props = {
  listItem: SideBarItemProps[];
  indexToSpace?: number;
};

const Wrapper = styled.div`
  height: 100vh;
  padding: var(--size-24) var(--size-30);
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  margin-top: var(--size-32);
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: var(--size-10);
`;

const Space = styled.div`
  flex: 1;
`;

const SideBar = ({ listItem, indexToSpace = 8 }: Props) => {
  const renderItem = () => {
    return listItem.map((item, index) => (
      <>
        {index === indexToSpace && <Space />}
        <SideBarItem {...item} />
      </>
    ));
  };
  return (
    <Wrapper>
      <Icons.Logo />
      <Content>{renderItem()}</Content>
    </Wrapper>
  );
};

export default SideBar;
