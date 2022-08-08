import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Icons } from "../assets";
import SideBarItem from "./SideBarItem";
import { withRouter } from "storybook-addon-react-router-v6";

export default {
  component: SideBarItem,
  title: "SideBarItem",
  decorators: [
    withRouter,
    (Story) => (
      <div style={{ display: "flex" }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof SideBarItem>;

const Story: ComponentStory<typeof SideBarItem> = (args) => (
  <SideBarItem {...args} />
);

export const Default = Story.bind({});

Default.args = {
  icon: <Icons.Dashboard />,
  title: "Dashboard",
  routeName: "/",
};

Default.parameters = {
  reactRouter: {
    routePath: "/",
  },
};
