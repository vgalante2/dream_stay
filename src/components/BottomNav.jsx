import * as React from 'react';
import { Link } from 'react-router-dom';
// import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

 

  return (
    <div className="bottom-nav">
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}

        sx={{
        ".MuiSvgIcon-root": {
          color: "#FE5257",
          width: "100%",
          display: "flex",
          flexDirection: "row",

         
        },
      }}
      >
      <Link to={`/recent`}  label="Recents">
        <BottomNavigationAction  sx={{
    '&:hover': {
      color: 'red', // Color on hover
    },
    '&.Mui-selected': {
      color: 'black',
    }, }}label="Recents" icon={<RestoreIcon />} />
        </Link>
        <Link to={`/`}  label="Favorites">
        <BottomNavigationAction  
        sx={{
    '&:hover': {
      color: 'red', // Color on hover
    },
    '&.Mui-selected': {
      color: 'black',
    }, }}label="Home" icon={<HomeIcon />} />
    </Link>
    <Link to={`/favorites`} >
        <BottomNavigationAction sx={{
    '&:hover': {
      color: 'red', // Color on hover
    },
    '&.Mui-selected': {
      color: 'black',
    }, }}  label={"Favorites"} icon={<FavoriteIcon />} />
     </Link>
      </BottomNavigation>
     
    </div>
  );
}