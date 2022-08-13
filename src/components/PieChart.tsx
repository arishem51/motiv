import { CSSProperties } from "react";

const RADIUS = 50;
const STROKE_WIDTH = 10;
const circumference = 2 * Math.PI * RADIUS;

type Props = {
  strokeColor?: CSSProperties["color"];
};

const PieChart = ({ strokeColor = "var(--color-purple)" }: Props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <svg width={120} height={120} viewBox="0 0 120 120">
        <circle
          cx={"50%"}
          cy={"50%"}
          r={RADIUS}
          stroke={"var(--color-white8)"}
          strokeWidth={STROKE_WIDTH}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={circumference / 4}
          style={{
            transformOrigin: "50% 50%",
            rotate: "135deg",
          }}
          strokeLinecap="round"
        />
        <circle
          cx={"50%"}
          cy={"50%"}
          r={RADIUS}
          stroke={strokeColor}
          strokeWidth={STROKE_WIDTH}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          style={{
            transformOrigin: "50% 50%",
            rotate: "135deg",
          }}
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default PieChart;
