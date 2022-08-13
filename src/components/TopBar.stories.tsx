import { ComponentMeta, ComponentStory } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import TopBar from "./TopBar";

export default {
  component: TopBar,
  title: "TopBar",
} as ComponentMeta<typeof TopBar>;

const queryClient = new QueryClient();

export const Default: ComponentStory<typeof TopBar> = (args) => (
  <QueryClientProvider client={queryClient}>
    <TopBar />
  </QueryClientProvider>
);
