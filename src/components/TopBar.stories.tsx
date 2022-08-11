import { ComponentMeta, ComponentStory } from "@storybook/react";
import TopBar from "./TopBar";

export default {
  component: TopBar,
  title: "Top bar",
} as ComponentMeta<typeof TopBar>;

export const Default: ComponentStory<typeof TopBar> = (args) => <TopBar />;
