import { useMemo, useState } from "react";
import { BarChart, Bar, Cell } from "recharts";

type BarItem = {
  id: string;
  name: string;
  isLine?: boolean;
  value: number;
};

type BarChartStatisticsProps = {
  barItemSize?: number;
  data: BarItem[];
  dataKey: string;
  chartWidth: number;
  chartHeight: number;
  gap?: number;
};

const BarChartStatistics = ({
  barItemSize = 28,
  data = [],
  dataKey,
  chartHeight,
  chartWidth,
  gap = 36,
}: BarChartStatisticsProps) => {
  const [activeBarId, setActiveBarId] = useState<string>("");

  // Data has transform with line
  const dataTransform = useMemo(() => {
    if (data.length === 0) {
      return [];
    }
    let newData: BarItem[] = [];
    const barValues = data.map((item) => item.value);
    const maximumValue = Math.max(...barValues);
    data.forEach((item) => {
      newData.push(item);
      newData.push({
        name: " ",
        id: `${item.id}-s`,
        value: maximumValue,
        isLine: true,
      });
    });
    return newData;
  }, [data]);

  const handleClick = (item: BarItem) => {
    if (item?.isLine) {
      return;
    }
    setActiveBarId(item.id);
  };

  const renderItem = () => {
    return dataTransform?.map((item, index) => {
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
    const result = dataTransform?.find((item) => item.id === props.id);
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
        {result?.name}
      </text>
    );
  };

  return (
    <BarChart
      width={chartWidth}
      height={chartHeight}
      data={dataTransform}
      margin={{ top: 0, left: 0, bottom: 20, right: 0 }}
    >
      <Bar dataKey={dataKey} label={renderLabel}>
        {renderItem()}
      </Bar>
    </BarChart>
  );
};

export default BarChartStatistics;
