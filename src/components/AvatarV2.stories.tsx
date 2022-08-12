import { ComponentMeta, ComponentStory } from "@storybook/react";
import AvatarV2 from "./AvatarV2";

export default {
  component: AvatarV2,
  title: "Avatar v2",
} as ComponentMeta<typeof AvatarV2>;

export const Default: ComponentStory<typeof AvatarV2> = (args) => <AvatarV2 />;
