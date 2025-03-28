import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Clientes from "./pages/Clientes";
import Ordenes from "./pages/Ordenes";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/ordenes" element={<Ordenes />} />
      </Routes>
    </Router>
  );
}

export default App;
