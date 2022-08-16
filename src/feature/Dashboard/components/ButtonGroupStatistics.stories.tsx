import { ComponentMeta, ComponentStory } from "@storybook/react";
import ButtonGroupStatistics from "./ButtonGroupStatistics";

export default {
  component: ButtonGroupStatistics,
  title: "Button Group Statistics",
  decorators: [(story) => <div style={{ display: "flex" }}>{story()}</div>],
} as ComponentMeta<typeof ButtonGroupStatistics>;

const Story: ComponentStory<typeof ButtonGroupStatistics> = (args) => (
  <ButtonGroupStatistics {...args} />
);

export const Default = Story.bind({});

Default.args = {
  activeColor: "var(--color-orange)",
};
