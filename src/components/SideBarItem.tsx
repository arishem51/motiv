import React from "react";
import styled from "styled-components";

type Props = {
  onClick: () => void;
  active?: boolean;
  children: React.ReactNode;
};

const Wrapper = styled.div<{ active?: boolean }>`
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

const SideBarItem = (props: Props) => {
  return <Wrapper {...props} />;
};

export default SideBarItem;
