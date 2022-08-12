import { QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { queryClient } from "./services/react-query";
import { GlobalStyle } from "./services/styled-components";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./services/firebase";
import { getFirestore } from "firebase/firestore";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const app = initializeApp(firebaseConfig);
export const firebaseDB = getFirestore(app);

root.render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <App />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover={false}
      />
    </QueryClientProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
