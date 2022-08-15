import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Icons } from "../../../assets";
import { Card } from "./Card";

export default {
  component: Card,
  title: "Card",
  decorators: [
    (Story) => (
      <div style={{ display: "flex" }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Card>;

const Story: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Default = Story.bind({});

Default.args = {
  title: "Energy",
  icon: <Icons.Energy />,
};
