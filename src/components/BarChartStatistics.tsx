import { useState } from "react";
import { BarChart, Bar, Cell } from "recharts";

type BarItem = {
  id: string;
  label?: string;
  isLine?: boolean;
  value: number;
};

type BarChartStatisticsProps = {
  barItemSize?: number;
  data: BarItem[] | undefined;
  dataKey: string;
  chartWidth: number;
  chartHeight: number;
  gap?: number;
};

const BarChartStatistics = ({
  barItemSize = 28,
  data,
  dataKey,
  chartHeight,
  chartWidth,
  gap = 36,
}: BarChartStatisticsProps) => {
  const [activeBarId, setActiveBarId] = useState<string>("");

  const handleClick = (item: BarItem) => {
    if (item?.isLine) {
      return;
    }
    setActiveBarId(item.id);
  };

  const renderItem = () => {
    return data?.map((item, index) => {
      const offSetX = gap * index + (item?.isLine ? barItemSize / 2 : 0);
      return (
        <Cell
          key={item.id}
          fill={
            activeBarId === item.id
              ? "var(--color-blue)"
              : " var(--color-white8)"
          }
          width={item?.isLine ? 1 : barItemSize}
          cursor={!item?.isLine ? "pointer" : "default"}
          onClick={() => handleClick(item)}
          x={offSetX}
        />
      );
    });
  };

  const renderLabel = (props: any) => {
    const result = data?.find((item) => item.id === props.id);
    return (
      <text
        y="100%"
        x={props.x}
        style={{
          fontSize: "var(--size-14)",
          color: "var(--color-dark6)",
          opacity: 0.5,
        }}
      >
        {result?.label}
      </text>
    );
  };

  return (
    <BarChart
      width={chartWidth}
      height={chartHeight}
      data={data}
      margin={{ top: 0, left: 0, bottom: 20, right: 0 }}
    >
      <Bar dataKey={dataKey} label={renderLabel}>
        {renderItem()}
      </Bar>
    </BarChart>
  );
};

export default BarChartStatistics;
