import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ChatbotIntegration from "./pages/ChatbotIntegration";
import IntegrateInstructions from "./pages/IntegrateInstructions";
import SetupOrganisation from "./pages/SetupOrganisation";  
import Login from "./pages/login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/setup-organisation" element={<SetupOrganisation />} />
      <Route path="/chatbot-integration" element={<ChatbotIntegration />} />
      <Route path="/integrate-instructions" element={<IntegrateInstructions />} />
    </Routes>
  );
}

export default App;
