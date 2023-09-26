import React, { useState } from 'react';
import ProfileMenu from './ProfileMenu';
import LanguageIcon from '@mui/icons-material/Language';
import logo from "../assets/dreamstay.png";


function Navbar() {
const [activeDropdown, setActiveDropdown] = useState(null);

const handleDropdown = (name) => {
if (activeDropdown === name) {
    setActiveDropdown(null) 
} else { setActiveDropdown(name);
}
}



    return (
        <header>
        <nav className="navbar" >
        <img src={logo} alt="logo" className="logo" onClick={() => window.location.reload()}  />
        <div className= "buttons" >
          <button onClick={() => handleDropdown('anywhere')} className="btn anywhere"> Any where</button>
          <button onClick={() => handleDropdown('anyweek')} className="btn anyweek"> Any week</button>
          <button onClick={() => handleDropdown('anyguest')} className="btn anyguest"> Any guest</button>
          <div className="search-btn-section">
          <button onClick={() => handleDropdown('search')} className="search-btn"> <i class="fa-solid fa-magnifying-glass"></i></button>
          </div>
         </div>
         {
            activeDropdown === 'anywhere' && 
            <div className="dropdown-content anywhere">
            <button className="drop-btn flexible"> </button>
            <button className="drop-btn america"> </button>
            <button className="drop-btn europe"> </button>
            <button className="drop-btn caribbean"> </button>
            <button className="drop-btn canada"> </button>
            <button className="drop-btn bali"> </button>
            </div>
         }
         {
            activeDropdown === 'anyweek' &&
            <div className="dropdown-content anyweek">


            </div>
         }
         {
            activeDropdown === 'anyguest' && 
            <div className="dropdown-content anyguest">Content for Any guest</div>
         }
            <ul className="navbar-items">
                <li className=" item-1 "><a href='/'> List Your Home </a></li>
                <li className=" item-2 "><a href='/'> <LanguageIcon className="globe" /> </a></li>
                <li className=" item-3 "><a href='/'> <ProfileMenu/> </a></li>
            </ul>
        </nav>
        </header>
    );
}

export default Navbar;





