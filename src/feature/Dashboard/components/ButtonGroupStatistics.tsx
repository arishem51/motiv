import { useState } from "react";
import styled from "styled-components";

type Props = {
  hasBg?: boolean;
  activeColor?: string;
};

type ButtonItem = {
  name: string;
  id: string;
};

const BUTTONS: ButtonItem[] = [
  {
    name: "Day",
    id: "day",
  },
  {
    name: "Week",
    id: "week",
  },
  {
    name: "Month",
    id: "month",
  },
];

const Wrapper = styled.div<{ hasBg: boolean }>`
  display: flex;
  gap: var(--size-12);
  background-color: ${(props) =>
    props.hasBg ? "var(--color-white7)" : "color-white"};
  border-radius: var(--size-14);
`;

const Button = styled.button<{ isSelected: boolean; activeColor: string }>`
  outline: none;
  appearance: none;
  border: none;
  padding: var(--size-6) var(--size-12);
  border-radius: var(--size-14);
  cursor: pointer;
  background-color: ${(props) =>
    props.isSelected ? props.activeColor : "var(--color-transparent)"};
  color: ${(props) =>
    props.isSelected ? "var(--color-white)" : "var(--color-dark2)"};
  font-weight: 700;
`;

const ButtonGroupStatistics = ({
  hasBg = false,
  activeColor = "var(--color-blue)",
}: Props) => {
  const [selectedId, setSelectedId] = useState(BUTTONS["0"].id);

  return (
    <Wrapper hasBg={hasBg}>
      {BUTTONS.map((button) => (
        <Button
          children={button.name}
          key={button.id}
          isSelected={button.id === selectedId}
          onClick={() => {
            setSelectedId(button.id);
          }}
          activeColor={activeColor}
        />
      ))}
    </Wrapper>
  );
};

export default ButtonGroupStatistics;
