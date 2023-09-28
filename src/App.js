import React, { useState } from 'react';
import './styles/index.css';
import BottomNav from "./components/BottomNav";
import { Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
import HomesPage from './Pages/HomesPage';
import FavoritesPage from "./Pages/FavoritesPage";
import homesData from "./components/homes.json";




function App() {
  const [homes, setHomes] = useState(homesData); 

  function toggleFavorite(homeId) {
    const updatedHomes = homes.map(hearted => {
        if (hearted.id === homeId) {
            return {
                ...hearted,
                isFavorited: !hearted.isFavorited
            };
        }
        return hearted;
    });
    console.log("Updated homes:", updatedHomes);
    setHomes(updatedHomes);
}

  
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/homes/:id" element={<HomesPage />} />
        <Route path="/favorites" element={<FavoritesPage homes={homes} toggleFavorite={toggleFavorite} />} />
      </Routes>
      <BottomNav />
    </>
  );
}

export default App;
