import React from 'react';
import Card from "./Cards";



function CardSection({ homes, toggleFavorite }) {
  
  
  
  return (
    <div className="card-section">
      {homes.map(home => <Card key={home.id} home={home} toggleFavorite={toggleFavorite} />)}
    </div>
  );
}


export default CardSection;