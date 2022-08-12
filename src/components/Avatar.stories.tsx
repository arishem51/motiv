import { ComponentMeta, ComponentStory } from "@storybook/react";
import Avatar, { genConfig } from "react-nice-avatar";

export default {
  component: Avatar,
  title: "Avatar",
} as ComponentMeta<typeof Avatar>;

export const Default: ComponentStory<typeof Avatar> = (args) => (
  <Avatar {...args} style={{ width: "40px", height: "48px" }} />
);

const config = genConfig();

Default.args = {
  ...config,
};
