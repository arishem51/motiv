import { ComponentMeta, ComponentStory } from "@storybook/react";
import { genConfig } from "react-nice-avatar";
import Avatar from "./Avatar";

export default {
  component: Avatar,
  title: "Avatar",
} as ComponentMeta<typeof Avatar>;

export const Default: ComponentStory<typeof Avatar> = (args) => (
  <Avatar {...args} />
);

Default.args = {
  imageConfig: genConfig(),
  isLoading: false,
};
