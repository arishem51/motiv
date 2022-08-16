import { ComponentMeta, ComponentStory } from "@storybook/react";
import HeaderTextStatistics from "./HeaderTextStatistics";

export default {
  component: HeaderTextStatistics,
  title: "Header Text Statistics",
} as ComponentMeta<typeof HeaderTextStatistics>;

const Story: ComponentStory<typeof HeaderTextStatistics> = (args) => (
  <HeaderTextStatistics {...args} />
);

export const Default = Story.bind({});

Default.args = {
  title: "Miles",
};
