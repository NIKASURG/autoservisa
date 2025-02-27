import React ,{useState, useEffect} from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import{onAuthStateChanged} from 'firebase/auth'
import Header from './elementai/header'
import LoginPage from './elementai/loginPage';
import RegisterPage from './elementai/registracija'
import {auth} from './firebase/config'
function App() {
  const [user,cangeUser]= useState(null)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // cangeUser(currentUser);
  console.log(user)
    });
    return () => unsubscribe();
  }, []);
  return (
    <div className="App">
      <Header/>
      <p>{user}</p>
      <BrowserRouter>
      <Routes>
          {/* <Route index element={<Home />} /> */}
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/register" element={<RegisterPage/>} />
          
          {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
