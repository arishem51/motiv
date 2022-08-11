import { ComponentMeta, ComponentStory } from "@storybook/react";
import Loading from "./Loading";

export default {
  component: Loading,
  title: "Loading",
} as ComponentMeta<typeof Loading>;

export const Default: ComponentStory<typeof Loading> = (args) => <Loading />;
