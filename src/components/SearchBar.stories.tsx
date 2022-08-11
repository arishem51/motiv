import { ComponentMeta, ComponentStory } from "@storybook/react";
import SearchBar from "./SearchBar";

export default {
  component: SearchBar,
  title: "Search Bar",
  decorators: [
    (Story) => (
      <div style={{ display: "flex" }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof SearchBar>;

export const Default: ComponentStory<typeof SearchBar> = (args) => (
  <SearchBar />
);
