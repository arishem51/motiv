import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Icons } from "../assets";
import SideBarItem from "./SideBarItem";

export default {
  component: SideBarItem,
  title: "SideBarItem",
} as ComponentMeta<typeof SideBarItem>;

const Story: ComponentStory<typeof SideBarItem> = (args) => (
  <SideBarItem {...args} />
);

export const Default = Story.bind({});

Default.args = {
  icon: <Icons.Dashboard />,
  title: "Dashboard",
};
