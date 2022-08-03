import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./Button";

export default {
  component: Button,
  title: "Button",
} as ComponentMeta<typeof Button>;

const Story: ComponentStory<typeof Button> = () => <Button />;

export const Default = Story.bind({});
