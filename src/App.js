import React ,{useState, useEffect} from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import{onAuthStateChanged} from 'firebase/auth'
import Header from './elementai/header'
import LoginPage from './elementai/loginPage';
import RegisterPage from './elementai/registracija'
import {auth} from './firebase/config'
import Forma from './elementai/forma'
import ManoUsakymai from './elementai/ManoUsakymai'
import DrkLight from './elementai/darkLigth';
function App() {
  const [user,setUser]= useState(null)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser)
      setUser(currentUser);
  console.log(user)
    });
    return () => unsubscribe();
  }, []);
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
      <Routes>

          <Route path="/login" element={<LoginPage/>} />
          <Route path="/register" element={<RegisterPage/>} />
          <Route path="/uzsakymas" element={<Forma/>} />
          <Route path="/manoUsakymai" element={<ManoUsakymai/>} />
          
          {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
      <DrkLight/>
    </BrowserRouter>
    </div>
  );
}

export default App;
