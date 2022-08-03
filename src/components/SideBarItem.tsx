import React from "react";
import styled from "styled-components";

export type SideBarItemProps = {
  icon: React.ReactNode;
  title: string;
  onClick: () => void;
  active?: boolean;
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

const Text = styled.span`
  color: var(--color-dark2);
  user-select: none;
  font-weight: 500;
`;

const SideBarItem = ({
  icon,
  title,
  onClick,
  active = false,
}: SideBarItemProps) => {
  return (
    <Wrapper onClick={onClick} active={active}>
      {icon}
      <Text>{title}</Text>
    </Wrapper>
  );
};

export default SideBarItem;
