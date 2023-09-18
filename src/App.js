import React, { useEffect } from 'react';
import './styles/index.css';
import BottomNav from "./components/BottomNav";
import { Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
import HomesPage from './Pages/HomesPage';





function App() {

useEffect(() => {
  const timer = setTimeout(() => {
    alert("The Dev is still working on this ⏳ ");
  }, 3000);
})

  return (
    <>
  <Routes>
 <Route path="/" element={<Home/>} />
 <Route path="/homes/:id" element={<HomesPage/>} />
  </Routes>
  <BottomNav />
  </>
  );
}

export default App;
