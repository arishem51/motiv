import { ComponentMeta, ComponentStory } from "@storybook/react";
import PieChart from "./PieChart";

export default {
  component: PieChart,
  title: "Pie Chart",
} as ComponentMeta<typeof PieChart>;

export const Default: ComponentStory<typeof PieChart> = () => <PieChart />;
