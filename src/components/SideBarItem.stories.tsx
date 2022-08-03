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
  onClick: () => console.log("default click"),
  children: (
    <>
      <Icons.Dashboard />
      <span
        style={{
          color: "var(--color-dark2)",
          fontWeight: 500,
        }}
      >
        Dashboard
      </span>
    </>
  ),
};
