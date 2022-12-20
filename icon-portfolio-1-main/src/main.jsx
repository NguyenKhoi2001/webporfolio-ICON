import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ItemProvider from "./contexts/ItemProvider";
import PropertyProvider from "./contexts/PropertyProvider";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ItemProvider>
      <PropertyProvider>
        <App />
      </PropertyProvider>
    </ItemProvider>
  </React.StrictMode>
);
