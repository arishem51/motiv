import { ComponentMeta, ComponentStory } from "@storybook/react";
import FormInput from "./FormInput";

export default {
  component: FormInput,
  title: "Form Input",
  decorators: [
    (Story) => (
      <div style={{ display: "flex" }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof FormInput>;

const Story: ComponentStory<typeof FormInput> = (args) => (
  <FormInput {...args} />
);

export const Default = Story.bind({});
