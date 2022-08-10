import styled from "styled-components";
import { Icons } from "../assets";

const Label = styled.label`
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
`;

const CheckedIcon = styled(Icons.Check)`
  position: absolute;
  width: var(--size-14);
  height: var(--size-14);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

type Props = {
  checked?: boolean;
};

const Checkbox = ({ checked = false }: Props) => {
  return (
    <Label htmlFor="checkbox">
      {checked && <CheckedIcon fill="var(--color-checkbox)" />}
      <Input id="checkbox" type="checkbox" />
    </Label>
  );
};

export default Checkbox;
