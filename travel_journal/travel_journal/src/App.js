import React from 'react';
//BrowserRouter como o roteador de nível superior e importar corretamente Route e Routes do react-router-dom. Aqui está uma correção para o seu código:
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header';
import { Login } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import "./css/header.css";
import "./css/login.css";
import "./css/landingPage.css"

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
