import { ComponentMeta, ComponentStory } from "@storybook/react";
import Checkbox from "./Checkbox";

export default {
  component: Checkbox,
  title: "Checkbox",
  decorators: [
    (Story) => (
      <div style={{ display: "flex" }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Checkbox>;

const Story: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const Default = Story.bind({});

Default.args = {
  checked: true,
};
