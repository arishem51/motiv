import { ComponentMeta, ComponentStory } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";
import RequireAuth from "./RequireAuth";

export default {
  component: RequireAuth,
  title: "Require Auth",
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: "/",
    },
  },
} as ComponentMeta<typeof RequireAuth>;

export const Default: ComponentStory<typeof RequireAuth> = (args) => (
  <RequireAuth />
);
