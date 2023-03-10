import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { FirebaseContext } from "./context/FirebaseContext";
import { firebase } from "./config/firebase";
import { ProvideAuth } from "./context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{ firebase }}>
      <ProvideAuth>
        <App />
      </ProvideAuth>
    </FirebaseContext.Provider>
  </React.StrictMode>
);
