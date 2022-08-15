import styled from "styled-components";
import { scaleLinear } from "d3-scale";
import { memo } from "react";

type Props = {
  strokeColor?: string;
  strokeWidth?: number;
  radius?: number;
  strokeBackgroundColor?: string;
  value?: number;
  textColor?: string;
};

const COORDINATES = "50%";
const SIZE = 112;
const TRANSPARENT = "transparent";
const ROUND = "round";
const DEFAULT_ROTATE = "135deg";

const Circle = styled.circle`
  transform-origin: ${COORDINATES} ${COORDINATES};
  rotate: ${DEFAULT_ROTATE};
`;

const Svg = styled.svg``;

const Text = styled.text`
  font-size: 24px;
  font-weight: 700;
`;

const PieChart = ({
  strokeColor = "var(--color-purple)",
  strokeWidth = 12,
  radius = 50,
  strokeBackgroundColor = "var(--color-white8)",
  value = 0,
  textColor = "var(--color-white)",
}: Props) => {
  const circumference = Math.floor(Math.PI * 2 * radius);
  const minimumOffset = circumference / 4;

  const calculator = scaleLinear()
    .domain([0, 100])
    .range([circumference, circumference / 4])
    .clamp(true);

  const offset = calculator(value);

  return (
    <Svg width={SIZE} height={SIZE} viewBox={`0 0 ${SIZE} ${SIZE}`}>
      <Circle
        cx={COORDINATES}
        cy={COORDINATES}
        r={radius}
        stroke={strokeBackgroundColor}
        strokeWidth={strokeWidth}
        fill={TRANSPARENT}
        strokeDasharray={circumference}
        strokeDashoffset={minimumOffset}
        strokeLinecap={ROUND}
        strokeOpacity={0.3}
      />
      <Circle
        cx={COORDINATES}
        cy={COORDINATES}
        r={radius}
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        fill={TRANSPARENT}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap={ROUND}
      />
      <Text
        x="50%"
        y="55%"
        dominant-baseline="middle"
        textAnchor="middle"
        fill={textColor}
      >
        {value + "%"}
      </Text>
    </Svg>
  );
};

export default memo(PieChart);
