import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./context/auth/authContext";
import { BotProvider } from "./context/bot/botContext";
import { UserProvider } from "./context/user/userContext";
import BaseRoute from "./routes";

function App() {
  return (
    <Router>
      <UserProvider>
        <BotProvider>
          <AuthProvider>
            <BaseRoute />
          </AuthProvider>
        </BotProvider>
      </UserProvider>
    </Router>
  );
}

export default App;
