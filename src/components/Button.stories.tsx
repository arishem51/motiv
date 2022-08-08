import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Icons } from "../assets";
import Button from "./Button";

export default {
  component: Button,
  title: "Button",
} as ComponentMeta<typeof Button>;

const Story: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Story.bind({});

Default.args = {
  title: "Button",
};

export const GoogleButton = Story.bind({});

GoogleButton.args = {
  title: "Sign in with Google",
  variant: "secondary",
  icon: <Icons.Google />,
};

export const FacebookButton = Story.bind({});

FacebookButton.args = {
  title: "Sign in with Facebook",
  icon: <Icons.Facebook />,
  style: {
    backgroundColor: "#4776D0",
  },
};
