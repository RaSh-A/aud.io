import React from "react";
// import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { AudProvider } from "./context/AudContext";
import { createRoot } from 'react-dom/client';
import { CartProvider } from "./context/CartContext";

// Call make Server
makeServer();
const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <React.StrictMode>
    <Router>
      <AudProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </AudProvider>
    </Router>
  </React.StrictMode>
);
