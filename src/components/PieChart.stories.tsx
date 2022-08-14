import { ComponentMeta, ComponentStory } from "@storybook/react";
import PieChart from "./PieChart";

export default {
  component: PieChart,
  title: "Pie Chart",
} as ComponentMeta<typeof PieChart>;

const Story: ComponentStory<typeof PieChart> = (args) => <PieChart {...args} />;

export const Default = Story.bind({});

Default.args = {
  totalValue: 100,
  currentValue: 10,
};
