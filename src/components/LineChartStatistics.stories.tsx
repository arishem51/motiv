import { ComponentMeta, ComponentStory } from "@storybook/react";
import LineCharyStatistics from "./LineChartStatistics";

export default {
  component: LineCharyStatistics,
  title: "Line Chart Statistics",
} as ComponentMeta<typeof LineCharyStatistics>;

const Story: ComponentStory<typeof LineCharyStatistics> = (args) => (
  <LineCharyStatistics {...args} />
);

export const Default = Story.bind({});

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

Default.args = {
  data: data,
  dataKey: "value",
  chartHeight: 198,
  chartWidth: 398,
};
