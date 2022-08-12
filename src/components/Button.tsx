import {
  ButtonHTMLAttributes,
  CSSProperties,
  isValidElement,
  ReactNode,
} from "react";
import { SyncLoader } from "react-spinners";
import styled from "styled-components";

export type ButtonProps = {
  title?: string;
  variant?: "primary" | "secondary";
  icon?: ReactNode;
  textStyle?: CSSProperties;
  loading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Wrapper = styled.button<ButtonProps>`
  background-color: ${(props) =>
    props.variant === "secondary"
      ? "transparent"
      : props.style?.backgroundColor || "var(--color-purple)"};
  padding: var(--size-18) var(--size-24);
  border-radius: var(--size-8);
  border: 1px solid
    ${(props) =>
      props.variant === "secondary"
        ? "var(--color-white3)"
        : props.style?.backgroundColor || "transparent"};
  cursor: pointer;
  min-width: 246px;
  min-height: 60px;
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
  justify-content: center;
`;

const Button = ({
  title,
  icon,
  textStyle,
  loading = false,
  ...props
}: ButtonProps) => {
  return (
    <Wrapper {...props}>
      <Content>
        {loading ? (
          <SyncLoader
            size={12}
            color={
              props.variant === "secondary"
                ? "var(--color-orange)"
                : "var(--color-white)"
            }
          />
        ) : (
          <>
            {icon && isValidElement(icon) && icon}
            <Text style={textStyle} variant={props.variant}>
              {title}
            </Text>
          </>
        )}
      </Content>
    </Wrapper>
  );
};

export default Button;
