import React,{Suspense} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/homePage';
import Login from "./Pages/loginPage";
import Register from "./Pages/registerPage";
import './App.css';
import UserProfile from './Pages/userProfile';

    function App() {
      return (
    <Router>
       <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register/>} />
          <Route path="/profile" element={<UserProfile/>} />
        </Routes>
       </Suspense>
    </Router>
  );
}

export default App;
