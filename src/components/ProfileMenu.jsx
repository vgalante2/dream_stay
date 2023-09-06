import * as React from 'react';
// import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div  className="burger-menu">
      <MenuOutlinedIcon />
      <AccountCircleOutlinedIcon className="profile"
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      />
        
      <Menu
        id="basic-menu"
        
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
       
        sx={{
        ".MuiMenuItem-root": {
           
            paddingBottom: ".5rem",
            paddingTop: ".5rem",
            paddingRight: "4rem",
            fontSize:   "13px",
        },

        }}
      >
        <MenuItem onClick={handleClose} className="menu-items" >Profile</MenuItem>
        <MenuItem  onClick={handleClose} className="menu-items" >My account</MenuItem>
        <MenuItem  onClick={handleClose} className="menu-items" >Login</MenuItem>
        <div
            style={{
                height: "1px",
                backgroundColor: "rgb(255, 186, 186)",
                width: "100%",
            }}
        />
        <MenuItem  onClick={handleClose} className="menu-items" >DreamStay Your Home</MenuItem>
        <MenuItem  onClick={handleClose} className="menu-items" >Host an experience</MenuItem>
        <MenuItem  onClick={handleClose} className="menu-items" >Help</MenuItem>
      </Menu>
    </div>
  );
}
