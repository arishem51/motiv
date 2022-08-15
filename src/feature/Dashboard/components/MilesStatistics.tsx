import { Fragment, useState } from "react";
import styled from "styled-components";
import BarChartStatistics from "../../../components/BarChartStatistics";

const data = [
  {
    label: "1 PM",
    value: 4000,
    id: "id-1",
  },
  {
    label: "Special",
    value: 4000,
    isLine: true,
    id: "id-1s",
  },
  {
    label: "2 PM",
    value: 3000,
    id: "id-2",
  },
  {
    label: "Special",
    value: 4000,
    isLine: true,
    id: "id-2s",
  },
  {
    label: "3 PM",
    value: 2000,
    id: "id-3",
  },
  {
    label: "Special",
    value: 4000,
    isLine: true,
    id: "id-3s",
  },
  {
    label: "4 PM",
    value: 2780,
    id: "id-4",
  },
  {
    label: "Special",
    value: 4000,

    isLine: true,
    id: "id-4s",
  },
  {
    label: "5 PM",
    value: 1890,
    id: "id-5",
  },
  {
    label: "Special",
    value: 4000,
    isLine: true,
    id: "id-5s",
  },
  {
    label: "6 PM",
    value: 2390,
    id: "id-6",
  },
  {
    label: "Special",
    value: 4000,
    isLine: true,
    id: "id-6s",
  },
  {
    label: "7 PM",
    value: 3490,
    id: "id-7",
  },
];

const Wrapper = styled.div`
  padding: var(--size-16) var(--size-32);
  background-color: var(--color-white);
  border-radius: var(--size-14);
  gap: var(--size-10);
  display: flex;
  flex-direction: column;
`;

const TextWrapper = styled.div`
  display: flex;
  gap: var(--size-8);
`;

const Text = styled.p`
  font-size: var(--size-20);
  color: var(--color-dark);
`;

const Text700 = styled(Text)`
  font-weight: 700;
`;

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

const MilesStatistics = () => {
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

  return (
    <Wrapper>
      <TextWrapper>
        <Text700>Miles</Text700>
        <Text>Statistics</Text>
      </TextWrapper>
      <ButtonWrapper>{renderButton()}</ButtonWrapper>
      <BarChartStatistics
        dataKey="value"
        data={data}
        chartHeight={198}
        chartWidth={400}
      />
    </Wrapper>
  );
};

export default MilesStatistics;
