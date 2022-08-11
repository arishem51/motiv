import { InputHTMLAttributes } from "react";
import styled from "styled-components";
import { Icons } from "../assets";

type Props = InputHTMLAttributes<HTMLInputElement>;

const Label = styled.label`
  display: flex;
  gap: var(--size-12);
  padding: var(--size-12) var(--size-14);
  border-radius: var(--size-8);
  background-color: var(--color-white6);
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
