import { ComponentMeta, ComponentStory } from "@storybook/react";
import SideBar from "./SideBar";

export default {
  component: SideBar,
  title: "Side Bar",
} as ComponentMeta<typeof SideBar>;

const Story: ComponentStory<typeof SideBar> = () => <SideBar />;

export const Default = Story.bind({});
