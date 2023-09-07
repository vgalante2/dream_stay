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
  // const [favoriteMode, setFavoriteMode] = useState(false);
 

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
          width: "100%"

         
        },
      }}
      >
      
        <BottomNavigationAction  sx={{
    '&:hover': {
      color: 'red', // Color on hover
    },
    '&.Mui-selected': {
      color: 'black',
    }, }}label="Recents" icon={<RestoreIcon />} />
        <Link to={`/`}  >
        <BottomNavigationAction  
        sx={{
    '&:hover': {
      color: 'red', // Color on hover
    },
    '&.Mui-selected': {
      color: 'black',
    }, }}label="Home" icon={<HomeIcon />} />
    </Link>
        <BottomNavigationAction sx={{
    '&:hover': {
      color: 'red', // Color on hover
    },
    '&.Mui-selected': {
      color: 'black',
    }, }}  label="Favorites" icon={<FavoriteIcon />} />
      </BottomNavigation>
    </div>
  );
}