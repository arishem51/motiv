import { QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { InitializeFirebase } from "./services/firebase";
import { queryClient } from "./services/react-query";
import { GlobalStyle } from "./services/styled-components";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

InitializeFirebase();

root.render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <App />
    </QueryClientProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();