import React, {useState} from 'react'
import CardSection from './CardSection';
import Slick from './Slick';
import homesData from '../components/homes.json';



function Dashboard()  {
 
    const homes = homesData;
    const [selectedCategory, setSelectedCategory] = useState(null);
  
    const handleFilter = (category) => {
      setSelectedCategory(category);
    };
  
    const filteredHomes = selectedCategory
      ? homes.filter(home => home.category === selectedCategory)
      : homes;
 
 
    return (
    <div className="dashboard">
      <Slick   onFilterChange={handleFilter} />
      <CardSection  homes={filteredHomes} />
    </div>
  )
}

export default Dashboard;