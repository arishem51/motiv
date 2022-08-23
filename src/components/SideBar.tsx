import { Fragment } from "react";
import styled from "styled-components";
import { Icons } from "../assets";
import { RouteNames } from "../services/react-router";
import SideBarItem, { SideBarItemProps } from "./SideBarItem";
import SignOutButton from "./SignOutButton";

type Props = {
  listItem: SideBarItemProps[];
};

const Wrapper = styled.div`
  height: auto;
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

const SideBar = ({ listItem }: Props) => {
  const renderItem = () => {
    return listItem.map((item, index) => {
      if (item.routeName === RouteNames.SIGN_OUT) {
        return <SignOutButton {...item} />;
      }
      return (
        <Fragment key={item.title}>
          {index === 8 && <Space />}
          <SideBarItem {...item} />
        </Fragment>
      );
    });
  };
  return (
    <Wrapper>
      <Icons.Logo />
      <Content>{renderItem()}</Content>
    </Wrapper>
  );
};

export default SideBar;
