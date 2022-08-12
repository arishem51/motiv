import cssVariablesTheme from "@etchteam/storybook-addon-css-variables-theme";
import light from "!!style-loader?injectType=lazyStyleTag!css-loader!../src/services/styled-components/variables.css";
import dark from "!!style-loader?injectType=lazyStyleTag!css-loader!../src/services/styled-components/variables.css";
import { initialize, mswDecorator } from "msw-storybook-addon";

initialize();

export const decorators = [cssVariablesTheme, mswDecorator];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  cssVariables: {
    files: {
      "Light Theme": light,
      "Dark Theme": dark,
    },
  },
};
