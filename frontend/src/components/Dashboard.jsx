import React, {useState} from 'react'
import CardSection from './CardSection';
import Slick from './Slick';
import homesData from './homes.json';



function Dashboard() {
  const [homes, setHomes] = useState(homesData);  // Define both state and setter
  const [selectedCategory, setSelectedCategory] = useState(null);

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

  const handleFilter = (category) => {
      setSelectedCategory(category);
  };

  const filteredHomes = selectedCategory
      ? homes.filter(home => home.category === selectedCategory)
      : homes;

  return (
      <div className="dashboard">
          <Slick onFilterChange={handleFilter} />
          <CardSection homes={filteredHomes} toggleFavorite={toggleFavorite} />
      </div>
  );
}

export default Dashboard;