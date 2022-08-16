import { ComponentMeta, ComponentStory } from "@storybook/react";
import BarChartStatistics from "./BarChartStatistics";

export default {
  component: BarChartStatistics,
  title: "Bar Chart Statistics",
} as ComponentMeta<typeof BarChartStatistics>;

const Story: ComponentStory<typeof BarChartStatistics> = (args) => (
  <BarChartStatistics {...args} />
);

export const Default = Story.bind({});

const data = [
  {
    name: "1 PM",
    value: 4000,
    id: Math.floor(Math.random() * 100).toString(),
  },
  {
    name: "2 PM",
    value: 3000,
    id: Math.floor(Math.random() * 100).toString(),
  },
  {
    name: "3 PM",
    value: 2000,
    id: Math.floor(Math.random() * 100).toString(),
  },
  {
    name: "4 PM",
    value: 2780,
    id: Math.floor(Math.random() * 100).toString(),
  },
  {
    name: "5 PM",
    value: 1890,
    id: Math.floor(Math.random() * 100).toString(),
  },
  {
    name: "6 PM",
    value: 2390,
    id: Math.floor(Math.random() * 100).toString(),
  },
  {
    name: "7 PM",
    value: 3490,
    id: Math.floor(Math.random() * 100).toString(),
  },
];

Default.args = {
  data,
  dataKey: "value",
  chartWidth: 418,
  chartHeight: 198,
};
