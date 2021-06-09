import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./context/auth/authContext";
import { RegistrationProvider } from "./context/registration/regContext";
import { BotProvider } from "./context/bot/botContext";
import BaseRoute from "./routes";

function App() {
  return (
    <Router>
      <BotProvider>
        <AuthProvider>
          <RegistrationProvider>
            <BaseRoute />
          </RegistrationProvider>
        </AuthProvider>
      </BotProvider>
    </Router>
  );
}

export default App;
