import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import ContextProvide from "./components/context/ContextProvide.jsx";
createRoot(document.getElementById("root")).render(
  <ContextProvide>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ContextProvide>
);
