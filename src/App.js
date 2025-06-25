import React,{Suspense} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './Login-Register/Login/LoginPage';
import RegisterPage from './Login-Register/Register/RegisterPage';
import HomePage from './Login-Register/HomePage/HomePage';
import './App.css';

function App() {
  return (
    <Router>
       <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />}/>
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
       </Suspense>
    </Router>
  );
}

export default App;
