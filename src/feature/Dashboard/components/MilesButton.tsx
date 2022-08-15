import { useState } from "react";
import styled from "styled-components";

type ButtonItem = {
  name: string;
  isActive: boolean;
  id: string;
};

const ButtonArr: ButtonItem[] = [
  {
    name: "Day",
    isActive: false,
    id: "day",
  },
  {
    name: "Week",
    isActive: false,
    id: "week",
  },
  {
    name: "Month",
    isActive: false,
    id: "month",
  },
];

const ButtonWrapper = styled.div`
  display: flex;
  gap: var(--size-10);
`;

const Button = styled.button<{ active: boolean }>`
  outline: none;
  appearance: none;
  border: none;
  padding: var(--size-4) var(--size-12);
  border-radius: var(--size-24);
  background-color: ${(props) =>
    props.active ? "var(--color-blue)" : "var(--color-white)"};
  color: ${(props) =>
    props.active ? "var(--color-white)" : "var(--color-dark2)"};
  cursor: pointer;
`;

const MilesButton = () => {
  const [buttonId, setButtonId] = useState<string>(ButtonArr["0"].id);

  const renderButton = () => {
    return ButtonArr.map((button) => (
      <Button
        active={button.id === buttonId}
        onClick={() => setButtonId(button.id)}
      >
        {button.name}
      </Button>
    ));
  };
  return <ButtonWrapper>{renderButton()}</ButtonWrapper>;
};

export default MilesButton;
