import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { rest } from "msw";
import { Example } from "./Example";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Demos/React Query",
  component: Example,
} as ComponentMeta<typeof Example>;

const defaultQueryClient = new QueryClient();

export const DefaultBehavior: ComponentStory<typeof Example> = () => {
  return (
    <QueryClientProvider client={defaultQueryClient}>
      <Example />
    </QueryClientProvider>
  );
};

const mockedQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const MockTemplate: ComponentStory<typeof Example> = () => (
  <QueryClientProvider client={mockedQueryClient}>
    <Example />
  </QueryClientProvider>
);

const films = [
  {
    title: "A New Hope",
    episode_id: 4,
    opening_crawl: `(Mocked) Rebel spaceships have won their first victory against the evil Galactic Empire.`,
  },
  {
    title: "Empire Strikes Back",
    episode_id: 5,
    opening_crawl: `(Mocked) Imperial troops are pursuing the Rebel forces across the galaxy.`,
  },
  {
    title: "Return of the Jedi",
    episode_id: 6,
    opening_crawl: `(Mocked) Luke Skywalker has returned to his home planet of Tatooine to rescue Han Solo.`,
  },
];

export const MockedSuccess = MockTemplate.bind({});
MockedSuccess.parameters = {
  msw: {
    handlers: [
      rest.get("https://swapi.dev/api/films/", (req, res, ctx) => {
        return res(
          ctx.json({
            results: films,
          })
        );
      }),
    ],
  },
};

export const MockedError = MockTemplate.bind({});
MockedError.parameters = {
  msw: {
    handlers: [
      rest.get("https://swapi.dev/api/films/", (req, res, ctx) => {
        return res(ctx.delay(800), ctx.status(403));
      }),
    ],
  },
};
