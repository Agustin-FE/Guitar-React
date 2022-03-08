import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom"; // Esto lo agrego Leo ( Para no renderizar on Strict Mode)
import { Auth0Provider } from "@auth0/auth0-react"; // Esto lo agrego Leo ( Para Usar Auth0)

import "./index.css";
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <Auth0Provider
      domain="dev-y73u79kx.us.auth0.com"
      clientId="tcIOhWdllamD53KaQw6owNAwVDdohtpu"
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
