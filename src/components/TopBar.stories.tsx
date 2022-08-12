import { ComponentMeta, ComponentStory } from "@storybook/react";
import TopBar from "./TopBar";
import { withReactContext } from "storybook-react-context";

export default {
  component: TopBar,
  title: "Top bar",
  decorators: [withReactContext],
  parameters: {
    reactContext: {
      user: {
        photoURL: "https://i.pravatar.cc/48",
        email: "hungphung2002@gmail.com",
      },
    },
  },
} as ComponentMeta<typeof TopBar>;

export const Default: ComponentStory<typeof TopBar> = (args) => <TopBar />;
