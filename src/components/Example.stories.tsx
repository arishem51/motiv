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

export const MockedSuccess = MockTemplate.bind({});
MockedSuccess.parameters = {
  msw: {
    handlers: [
      rest.get(
        "https://firestore.googleapis.com/google.firestore.v1.Firestore/Listen/channel",
        (req, res, ctx) => {
          return res(
            ctx.json({
              imageConfig: {
                bgColor: "#506AF4",
                earSize: "small",
                eyeBrowStyle: "upWoman",
                eyeStyle: "oval",
                faceColor: "#AC6651",
                glassesStyle: "none",
                hairColor: "#FC909F",
                hairStyle: "womanShort",
                hatColor: "#fff",
                hatStyle: "beanie",
                mouthStyle: "peace",
                noseStyle: "short",
                sex: "woman",
                shirtColor: "#F4D150",
                shirtStyle: "hoody",
              },
            })
          );
        }
      ),
    ],
  },
};
