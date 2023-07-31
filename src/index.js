import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider  } from "@tanstack/react-query";
import UserProvider from "./components/context/UserContext";


const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
  <QueryClientProvider client={queryClient}>
    <UserProvider>
        <App />
        {/* <ReactQueryDevtools /> */}
    </UserProvider>
  </QueryClientProvider>
  </BrowserRouter>
);

reportWebVitals();
