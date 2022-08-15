import { useState } from "react";
import { BarChart, Bar, Cell } from "recharts";
import styled from "styled-components";

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
};

const BarChartStatistics = ({
  barItemSize = 28,
  data,
  dataKey,
  chartHeight,
  chartWidth,
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
      const offSetX =
        barItemSize * index + (item?.isLine ? barItemSize / 2 : 0);
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

  const renderLabel = () => {
    return data?.map((item, index) => {
      // remove line item
      if (index % 2 !== 0) {
        return null;
      }

      const offsetX = index * barItemSize;
      return (
        <text
          y="98%"
          x={offsetX}
          style={{
            fontSize: "var(--size-14)",
            color: "var(--color-dark6)",
            fontWeight: 400,
          }}
        >
          {item.label}
        </text>
      );
    });
  };

  return (
    <BarChart
      width={chartWidth}
      height={chartHeight}
      data={data}
      margin={{ top: 0, left: 0, bottom: 20, right: 0 }}
    >
      <Bar dataKey={dataKey}>{renderItem()}</Bar>
      {renderLabel()}
    </BarChart>
  );
};

export default BarChartStatistics;
