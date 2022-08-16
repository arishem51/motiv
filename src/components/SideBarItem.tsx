import React, { CSSProperties, isValidElement } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export type SideBarItemProps = {
  icon: React.ReactNode;
  title: string;
  routeName: string;
};

const Text = styled.p`
  color: var(--color-dark2);
  user-select: none;
  font-weight: 500;
  text-decoration: none;
`;

const sideBarItemStyles: CSSProperties = {
  display: "flex",
  padding: " var(--size-8)",
  borderRadius: "var(--size-6)",
  gap: "var(--size-10)",
  cursor: "pointer",
  minWidth: "174px",
  textDecoration: "none",
};
const activeStyle: CSSProperties = {
  ...sideBarItemStyles,
  backgroundColor: "var(--color-white2)",
};
const inActiveStyle = {
  ...sideBarItemStyles,
};

const SideBarItem = ({ icon, title, routeName }: SideBarItemProps) => {
  return (
    <NavLink
      to={routeName}
      style={({ isActive }) => (isActive ? activeStyle : inActiveStyle)}
    >
      {!!icon && isValidElement(icon) && icon}
      <Text>{title}</Text>
    </NavLink>
  );
};

export default SideBarItem;
