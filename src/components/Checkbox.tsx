import { InputHTMLAttributes } from "react";
import styled from "styled-components";
import { Icons } from "../assets";

type Props = InputHTMLAttributes<HTMLInputElement>;

const Wrapper = styled.div`
  position: relative;
  width: 16px;
  height: 16px;
  cursor: pointer;
`;

const Input = styled.input`
  position: absolute;
  border: 1.5px solid var(--color-border);
  border-radius: 4px;
  width: 100%;
  height: 100%;
  appearance: none;
  cursor: pointer;
`;

const CheckedIcon = styled(Icons.Check)`
  position: absolute;
  width: var(--size-12);
  height: var(--size-12);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
`;

const Checkbox = ({ checked, ...props }: Props) => {
  return (
    <Wrapper>
      {checked && <CheckedIcon fill="var(--color-checkbox)" />}
      <Input id="checkbox" type="checkbox" checked={checked} {...props} />
    </Wrapper>
  );
};

export default Checkbox;
