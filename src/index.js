import React from "react";
import ReactDom from "react-dom/client";

import App from "./App";
import "./index.css";
import { UserProvider } from "./context/AuthContext";

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <UserProvider>
    <App />
  </UserProvider>
);
