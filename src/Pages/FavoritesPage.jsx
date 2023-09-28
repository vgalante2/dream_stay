import React from 'react'
import Cards from "../components/Cards";



function FavoritesPage({ homes, toggleFavorite }) {
  const favoredHomes = homes.filter(home => home.isFavorited);

  return (
    <div className="favorites-page">
      {favoredHomes.map(home => (
        // Render the details of the favorited home
        <div key={home.id}>
        <Cards home={home} toggleFavorite={toggleFavorite}  />
        </div>
      ))}
    </div>
  );
}

export default FavoritesPage;