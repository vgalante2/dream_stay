import React from 'react';
import Card from "./Cards";


function CardSection({ homes }) {
  return (
    <div className="card-section">
      {homes.map(home => <Card key={home.id} home={home} />)}
    </div>
  );
}


export default CardSection;