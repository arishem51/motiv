import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Icons } from "../assets";
import SideBar from "./SideBar";

export default {
  component: SideBar,
  title: "Side Bar",
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
      onClick: () => console.log("123"),
    },
    {
      title: "Assets",
      icon: <Icons.Assets />,
      onClick: () => console.log("123"),
    },
    {
      title: "Dashboard",
      icon: <Icons.Dashboard />,
      onClick: () => console.log("123"),
    },
    {
      title: "Assets",
      icon: <Icons.Assets />,
      onClick: () => console.log("123"),
    },
    {
      title: "Dashboard",
      icon: <Icons.Dashboard />,
      onClick: () => console.log("123"),
    },
    {
      title: "Assets",
      icon: <Icons.Assets />,
      onClick: () => console.log("123"),
    },
    {
      title: "Dashboard",
      icon: <Icons.Dashboard />,
      onClick: () => console.log("123"),
    },
    {
      title: "Assets",
      icon: <Icons.Assets />,
      onClick: () => console.log("123"),
    },
    {
      title: "Assets",
      icon: <Icons.Assets />,
      onClick: () => console.log("123"),
    },
  ],
};
