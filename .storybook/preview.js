import cssVariablesTheme from "@etchteam/storybook-addon-css-variables-theme";
import light from "!!style-loader?injectType=lazyStyleTag!css-loader!../src/services/styled-components/variables.css";
import dark from "!!style-loader?injectType=lazyStyleTag!css-loader!../src/services/styled-components/variables.css";
import { initialize, mswDecorator } from "msw-storybook-addon";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

initialize();

export const firebaseConfig = {
  apiKey: "AIzaSyCF5THshspvImdg9GUSMiLT4nfpolK9h7Y",
  authDomain: "motiv-51.firebaseapp.com",
  projectId: "motiv-51",
  storageBucket: "motiv-51.appspot.com",
  messagingSenderId: "886215311036",
  appId: "1:886215311036:web:4243d4a4b169ea1d315ab9",
  measurementId: "G-H0H0KXB26Z",
};

const app = initializeApp(firebaseConfig);
export const firebaseDB = getFirestore(app);

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
