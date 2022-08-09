import { ComponentMeta, ComponentStory } from "@storybook/react";
import Divider from "./Divider";

export default {
  component: Divider,
  title: "Divider",
} as ComponentMeta<typeof Divider>;

const Story: ComponentStory<typeof Divider> = (args) => <Divider />;

export const Default = Story.bind({});
