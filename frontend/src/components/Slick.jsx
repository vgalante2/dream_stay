import React, {useState} from "react";
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
import data from './data.json'; // Path to your data.json file

function Slick({ onFilterChange }) {
  const [selectedFilter, setSelectedFilter] = useState();

  const handleFilterClick = (index, category) => {
      setSelectedFilter(index);
      if (onFilterChange) {
          onFilterChange(category);
      }
  };

  return (
    <div className="links">
      {data.map((item, i) => (
        <div  
          key={i}
          className={`links-box ${i === selectedFilter ? "selected-box" : ""}`}
          onClick={() => handleFilterClick(i, item.category)}
        >
          <img src={item.img} alt={item.alt} className="links-img" />
          <p className="links-label">{item.category}</p>
        </div>
      ))}
    </div>
  );
}

export default Slick;
