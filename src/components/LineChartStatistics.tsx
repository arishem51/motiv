import { Bar, ComposedChart, Line } from "recharts";

type Item = {
  name: string;
  value: string | number;
  id: string;
};

type Props = {
  data: Item[];
  chartWidth: number;
  chartHeight: number;
  lineWidth?: number;
  lineColor?: string;
  dataKey: string;
};

const TEXT_OFFSET = 14;

const LineChartStatistics = ({
  data,
  chartHeight,
  chartWidth,
  lineWidth = 2,
  lineColor = "var(--color-orange)",
  dataKey,
}: Props) => {
  const renderLabel = (props: any) => {
    return (
      <text
        x={props.x - TEXT_OFFSET}
        y={"100%"}
        key={props.id}
        style={{
          color: "var(--color-dark6)",
          opacity: 0.5,
          fontSize: "var(--size-14)",
        }}
      >
        {props.name}
      </text>
    );
  };

  return (
    <ComposedChart
      data={data}
      width={chartWidth}
      height={chartHeight}
      margin={{ top: 0, left: TEXT_OFFSET, right: 0, bottom: 20 }}
    >
      <Bar
        dataKey="value"
        fill="var(--color-white8)"
        barSize={1}
        label={renderLabel}
      />
      <Line
        type="natural"
        dataKey={dataKey}
        stroke={lineColor}
        strokeWidth={lineWidth}
        dot={false}
      />
    </ComposedChart>
  );
};

export default LineChartStatistics;
