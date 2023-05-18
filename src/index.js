import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";
import "./theme.css";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <div className="container">
      <App />
    </div>
  </React.StrictMode>
);
