import { ComponentMeta, ComponentStory } from "@storybook/react";
import Car from "./Car";

export default {
  component: Car,
  title: "Car",
  decorators: [(story) => <div style={{ display: "flex" }}>{story()}</div>],
} as ComponentMeta<typeof Car>;

const Story: ComponentStory<typeof Car> = (args) => <Car {...args} />;

export const Default = Story.bind({});

Default.args = {
  recommendPercent: 64,
  imageName: "miniCooper.png",
  carName: "Mini Cooper",
  price: 32,
  view: 132,
  bgColor: "var(--color-yellow2)",
  id: "1",
};
