import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

type Props = {
  title?: string;
  variant?: "primary" | "secondary";
  icon?: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Wrapper = styled.button<Props>`
  background-color: ${(props) =>
    props.variant === "secondary"
      ? "transparent"
      : props.style?.backgroundColor || "var(--color-purple)"};
  padding: var(--size-18) var(--size-30);
  border-radius: var(--size-8);
  border: 1px solid
    ${(props) =>
      props.variant === "secondary"
        ? "var(--color-white3)"
        : props.style?.backgroundColor || "transparent"};
  cursor: pointer;
`;

const Text = styled.h1<{ variant?: "secondary" | "primary" }>`
  color: ${(props) =>
    props.variant === "secondary" ? "var(--color-dark)" : "var(--color-white)"};
  font-weight: 500;
  font-size: 16px;
`;

const Content = styled.div`
  display: flex;
  gap: var(--size-12);
  align-items: center;
`;

const Button = ({ title, icon, ...props }: Props) => {
  return (
    <Wrapper {...props}>
      <Content>
        {icon}
        <Text variant={props.variant}>{title}</Text>
      </Content>
    </Wrapper>
  );
};

export default Button;
