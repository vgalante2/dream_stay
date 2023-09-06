import React, { useEffect, useState} from "react";
import Navbar from "../components/Navbar";
import { useParams } from 'react-router-dom';
import homesData from '../components/homes.json';
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import DatePicker from "react-datepicker";
import logo from "../assets/dreamstay.png";





function HomesPage() {
    const { id } = useParams();
    const home = homesData.find(homeItem => homeItem.id === Number(id));
    
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;
    const [guestCount, setGuestCount] = useState(0);
    const [nights, setNights] = useState(0);
    const [totalPrice, setTotalPrice] = useState(home.price);
    
    // Moved ageGroups, counts, dropdownVisible and incrementCount out of ageGroupSelector
    const ageGroups = ["Ages 13+", "Ages 2-12", "Under 2", "Pets"];
    const [counts, setCounts] = useState({
        "Ages 13+": 0,
        "Ages 2-12": 0,
        "Under 2": 0,
        "Pets": 0
    });
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const incrementCount = (group) => {
        setCounts(prevCounts => ({
            ...prevCounts,
            [group]: prevCounts[group] + 1
        }));
    };

    const decrementCount = (group) => {
        setCounts(prevCounts => ({
            ...prevCounts,
            [group]: prevCounts[group] - 1
        }));
    };

    useEffect(() => {
        if (startDate && endDate) {
            const differenceInTime = endDate - startDate;
            const differenceInDays = differenceInTime / (1000 * 3600 * 24);
            setNights(differenceInDays);
            setTotalPrice(differenceInDays * home.price);
        }
    }, [startDate, endDate, home.price]);

 


 
  return (
    <div className="homes-page">
        <div>
            <Navbar src={logo} />
        </div>
        <div className="header-container">
            <div className="names-rating-section">
                <div className="home-title">
                    <h1>{home.title}</h1>
                </div>
                <div className="home-sub">
                    <p> <StarRateRoundedIcon className="star" />{home.rating}</p>
                    <p>{home.location}</p>
                </div>
            </div>
            <div className="picture-section">
    {home.imgSrc.slice(0, 3).map((src, index) => (
        <img 
            key={index} 
            src={src} 
            alt={` ${index} ${home.title}`} 
        />
    ))}
</div>
        </div>
        <div className="home-intro">
           <h1> Home intro</h1>
           <p>{home.info}</p>
           </div>
        <div className="footer-container">
            <div className="info-section">
                <h1> Specifications </h1>
                <p>{home.size}</p>
                <h1> Amenities </h1>
                <p> {home.amenities}</p>
            </div>
            <div className="price-container">
              <div className="prices">
                <h1> ${home.price}<span className="span" >/night</span></h1>
                <h4> <span className="total-price" >Total Price: </span>${totalPrice}</h4>
                </div>
                <div className="booking">
                   
                        <DatePicker
                            className="picker"
                            placeholder="Select the days of your Dreamstay"
                            selected={startDate}
                            onChange={(update) => {
                                setDateRange(update);
                            }}
                            startDate={startDate}
                            endDate={endDate}
                            selectsRange
                            
                        />
                         <div>
                          <button className="guest-btn" onClick={() => setDropdownVisible(!dropdownVisible)}>Select Guests</button>
                         {dropdownVisible && (
                          <div className="guest-dropdown">
                          {ageGroups.map(group => (
                          <div className="guest-box" key={group}>
                            <span>{group}:</span> 
                            <br/>
                            <div className="guest-selector"> 
                            <button onClick={() => decrementCount(group)}>-</button>
                            <span> {counts[group]}</span>
                            <button onClick={() => incrementCount(group)}>+</button>
                            </div>
                        </div>
                    ))}
                </div>
              )}
               </div>
                    <button className="reserve-btn" >Reserve </button>
                </div>
            </div>
            
        </div>
        
        
    </div>
);

}


export default HomesPage;