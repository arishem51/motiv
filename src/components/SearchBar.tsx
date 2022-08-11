import { InputHTMLAttributes } from "react";
import styled from "styled-components";
import { Icons } from "../assets";

type Props = InputHTMLAttributes<HTMLInputElement>;

const Label = styled.label`
  display: flex;
  gap: var(--size-12);
  align-items: center;
  padding: var(--size-12);
  border-radius: var(--size-8);
  background-color: var(--color-white6);
  caret-color: var(--color-orange);
  cursor: text;
`;

const Input = styled.input`
  appearance: none;
  border: none;
  outline: none;
  color: var(--color-dark4);
  background-color: var(--color-white6);
`;

const SearchBar = (props: Props) => {
  return (
    <Label>
      <Icons.Search />
      <Input placeholder="Search..." {...props} />
    </Label>
  );
};

export default SearchBar;
