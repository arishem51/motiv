import { ComponentMeta, ComponentStory } from "@storybook/react";
import ChartStatistics from "./ChartStatistics";

export default {
  component: ChartStatistics,
  title: "Chart Statistics",
} as ComponentMeta<typeof ChartStatistics>;

const Story: ComponentStory<typeof ChartStatistics> = (args) => (
  <ChartStatistics />
);

export const Default = Story.bind({});
