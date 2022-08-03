import React from "react";
import styled from "styled-components";

type Props = {
  icon: React.ReactNode;
  title: string;
};

const Wrapper = styled.div`
  display: flex;
  padding: var(--size-8);
  border-radius: 6px;
  gap: 10px;
`;

const Text = styled.span`
  color: var(--color-dark2);
`;

const SideBarItem = ({ icon, title }: Props) => {
  return (
    <Wrapper>
      {icon}
      <Text>{title}</Text>
    </Wrapper>
  );
};

export default SideBarItem;
