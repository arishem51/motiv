import { ComponentMeta, ComponentStory } from "@storybook/react";
import LineCharyStatistics from "./LineChartStatistics";

export default {
  component: LineCharyStatistics,
  title: "Line Chart Statistics",
} as ComponentMeta<typeof LineCharyStatistics>;

const Story: ComponentStory<typeof LineCharyStatistics> = (args) => (
  <LineCharyStatistics />
);

export const Default = Story.bind({});
