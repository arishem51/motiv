import { ComponentMeta, ComponentStory } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";
import OnboardingText from "./OnboardingText";

export default {
  component: OnboardingText,
  title: "Onboarding Text",
} as ComponentMeta<typeof OnboardingText>;

const Story: ComponentStory<typeof OnboardingText> = (args) => (
  <OnboardingText {...args} />
);

export const Default = Story.bind({});

Default.decorators = [
  (Story) => (
    <div style={{ display: "flex" }}>
      <Story />
    </div>
  ),
  withRouter,
];

Default.args = {
  isSignIn: true,
};
