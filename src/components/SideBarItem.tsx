import React from "react";
import { Link as LinkRRD, useMatch } from "react-router-dom";
import styled from "styled-components";

export type SideBarItemProps = {
  icon: React.ReactNode;
  title: string;
  routeName: string;
};

const Wrapper = styled.div<{ active: boolean }>`
  display: flex;
  padding: var(--size-8);
  border-radius: 6px;
  gap: 10px;
  cursor: pointer;
  min-width: 174px;
  background-color: ${(props) => props.active && "var(--color-white2)"};
  &:hover {
    background-color: var(--color-white2);
  }
  transition: all 0.5s;
  align-items: center;
`;

const Link = styled(LinkRRD)`
  color: var(--color-dark2);
  user-select: none;
  font-weight: 500;
  text-decoration: none;
`;

const SideBarItem = ({ icon, title, routeName }: SideBarItemProps) => {
  const active = useMatch(routeName);
  return (
    <Wrapper active={!!active}>
      {icon}
      <Link to={routeName}>{title}</Link>
    </Wrapper>
  );
};

export default SideBarItem;
