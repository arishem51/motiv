import { ReactNode } from "react";
import styled from "styled-components";
import PieChart from "../../../components/PieChart";

type Variant = "primary" | "secondary";

type Props = {
  variant?: Variant;
  icon?: ReactNode;
  title?: string;
  chartColor?: string;
  chartValue?: number;
};

const Wrapper = styled.div<{ variant: Variant }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.variant === "secondary"
      ? "var(--color-white)"
      : "var(--color-purple)"};
  padding: var(--size-20) var(--size-60);
  border-radius: var(--size-14);
  gap: var(--size-10);
`;

const Text = styled.p<{ variant: Variant }>`
  font-size: 24px;
  font-weight: 700;
  color: ${(props) =>
    props.variant === "secondary" ? "var(--color-dark)" : "var(--color-white)"};
  margin-bottom: var(--size-20);
`;

const Card = ({
  variant = "primary",
  icon,
  title,
  chartColor,
  chartValue,
}: Props) => {
  return (
    <Wrapper variant={variant}>
      {icon}
      <Text variant={variant}>{title}</Text>
      <PieChart
        value={chartValue}
        strokeColor={chartColor}
        strokeOpacity={variant === "primary" ? 0.3 : 1}
      />
    </Wrapper>
  );
};

export { Card };
