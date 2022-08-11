import { InputHTMLAttributes, CSSProperties, forwardRef } from "react";
import styled from "styled-components";

type Props = {
  containerStyle?: CSSProperties;
} & InputHTMLAttributes<HTMLInputElement>;

const Wrapper = styled.div`
  display: flex;
  padding: var(--size-18) var(--size-20);
  border: 1px solid var(--color-border);
  border-radius: var(--size-10);
`;

const Input = styled.input`
  border: none;
  outline: none;
  color: var(--color-dark5);
`;

const Label = styled.label`
  cursor: text;
`;

const FormInput = forwardRef<HTMLInputElement, Props>(
  ({ containerStyle, ...props }, ref) => {
    return (
      <Label htmlFor="input">
        <Wrapper style={containerStyle}>
          <Input id="input" {...props} ref={ref} />
        </Wrapper>
      </Label>
    );
  }
);

export default FormInput;
