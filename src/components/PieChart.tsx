import styled from "styled-components";
import { scaleLinear } from "d3-scale";
import { memo } from "react";

type Props = {
  strokeColor?: string;
  strokeWidth?: number;
  radius?: number;
  strokeBackgroundColor?: string;
  value?: number;
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

const Svg = styled.svg`
  width: ${SIZE};
  height: ${SIZE};
`;

const PieChart = ({
  strokeColor = "var(--color-purple)",
  strokeWidth = 12,
  radius = 50,
  strokeBackgroundColor = "var(--color-white8)",
  value = 0,
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
    </Svg>
  );
};

export default memo(PieChart);
