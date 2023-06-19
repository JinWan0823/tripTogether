import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./reset.css";
import "./index.css";
import AuthProvider from "./provider/authProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <AuthProvider>
    <App />
  </AuthProvider>
);
