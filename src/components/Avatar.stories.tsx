import { ComponentMeta, ComponentStory } from "@storybook/react";
import Avatar from "./Avatar";
import imageSrc from "../assets/exampleAvatar.jpg";

export default {
  component: Avatar,
  title: "Avatar",
} as ComponentMeta<typeof Avatar>;

export const Default: ComponentStory<typeof Avatar> = (args) => (
  <Avatar {...args} />
);

Default.args = {
  src: imageSrc,
};
