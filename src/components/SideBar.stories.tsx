import { ComponentMeta, ComponentStory } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";
import { Icons } from "../assets";
import SideBar from "./SideBar";

export default {
  component: SideBar,
  title: "Side Bar",
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: "/",
    },
  },
} as ComponentMeta<typeof SideBar>;

const Story: ComponentStory<typeof SideBar> = (args) => <SideBar {...args} />;

export const Default = Story.bind({});

Default.decorators = [
  (Story) => (
    <div style={{ display: "flex" }}>
      <Story />
    </div>
  ),
];

Default.args = {
  listItem: [
    {
      title: "Dashboard",
      icon: <Icons.Dashboard />,
      routeName: "/",
    },
    {
      title: "Assets",
      icon: <Icons.Assets />,
      routeName: "assets",
    },
    {
      title: "Dashboard",
      icon: <Icons.Dashboard />,
      routeName: "assets",
    },
    {
      title: "Assets",
      icon: <Icons.Assets />,
      routeName: "assets",
    },
    {
      title: "Dashboard",
      icon: <Icons.Dashboard />,
      routeName: "assets",
    },
    {
      title: "Assets",
      routeName: "assets",
      icon: <Icons.Assets />,
    },
    {
      title: "Dashboard",
      routeName: "assets",
      icon: <Icons.Dashboard />,
    },
    {
      title: "Assets",
      routeName: "assets",
      icon: <Icons.Assets />,
    },
    {
      title: "Assets",
      routeName: "assets",
      icon: <Icons.Assets />,
    },
  ],
};
