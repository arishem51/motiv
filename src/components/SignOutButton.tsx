import { getAuth, signOut } from "firebase/auth";
import { isValidElement } from "react";
import styled from "styled-components";
import { SideBarItemProps } from "./SideBarItem";

const Wrapper = styled.div`
  display: flex;
  padding: var(--size-8);
  border-radius: var(--size-6);
  gap: var(--size-10);
  cursor: pointer;
  min-width: 174px;
  text-decoration: none;
`;

const Text = styled.p`
  color: var(--color-dark2);
  user-select: none;
  font-weight: 500;
  text-decoration: none;
`;

const SignOutButton = ({ icon, title }: SideBarItemProps) => {
  const handleClick = () => {
    const auth = getAuth();
    signOut(auth);
  };

  return (
    <Wrapper onClick={handleClick}>
      {!!icon && isValidElement(icon) && icon}
      <Text>{title}</Text>
    </Wrapper>
  );
};

export default SignOutButton;
