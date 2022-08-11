import { ComponentMeta, ComponentStory } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";
import SignUp from "./SignUp";

export default {
  component: SignUp,
  title: "Sign Up",
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: "/SignUp",
    },
  },
} as ComponentMeta<typeof SignUp>;

export const Default: ComponentStory<typeof SignUp> = (args) => <SignUp />;
