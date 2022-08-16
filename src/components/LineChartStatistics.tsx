import { Bar, ComposedChart, Line } from "recharts";

const data = [
  {
    name: "1 PM",
    value: 4000,
    id: "id-1",
  },
  {
    name: "2 PM",
    value: 1250,
    id: "id-2",
  },
  {
    name: "3 PM",
    value: 2210,
    id: "id-3",
  },
  {
    name: "4 PM",
    value: 1836,
    id: "id-4",
  },

  {
    name: "5 PM",
    value: 1300,
    id: "id-5",
  },
];

const LineCharyStatistics = () => {
  const renderLabel = (props: any) => {
    console.log({ props });
    return (
      <text
        x={props.x}
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
      width={398}
      height={198}
      margin={{ top: 0, left: 0, right: 0, bottom: 20 }}
    >
      <Bar
        dataKey="value"
        fill="var(--color-white8)"
        barSize={1}
        label={renderLabel}
      />
      <Line
        type="natural"
        dataKey="value"
        stroke="var(--color-orange)"
        strokeWidth={2}
        dot={false}
      />
    </ComposedChart>
  );
};

export default LineCharyStatistics;
