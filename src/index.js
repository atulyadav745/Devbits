import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import flatpickr from "flatpickr";
import Provider from "./redux/store"
import { GoogleOAuthProvider } from "@react-oauth/google"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="625198635648-7u3doc5lsrb3p6votvk4c8poueq4eqpf.apps.googleusercontent.com">
      <Provider>
        <Router>
          <App />
        </Router>
      </Provider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
