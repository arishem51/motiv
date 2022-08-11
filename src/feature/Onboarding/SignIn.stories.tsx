import { ComponentMeta, ComponentStory } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";
import SignIn from "./SignIn";

export default {
  component: SignIn,
  title: "Sign In",
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: "/SignIn",
    },
  },
} as ComponentMeta<typeof SignIn>;

export const Default: ComponentStory<typeof SignIn> = () => <SignIn />;
