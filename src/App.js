import React from 'react';
import './styles/index.css';
import BottomNav from "./components/BottomNav";
import { Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
import HomesPage from './Pages/HomesPage';
import FavoritesPage from './components/FavoritesPage';




function App() {



  
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/homes/:id" element={<HomesPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
      <BottomNav />
    </>
  );
}

export default App;
