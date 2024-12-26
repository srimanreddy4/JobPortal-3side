import React, {useEffect, useState} from 'react';
import axios from 'axios';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import {Link} from "react-router-dom" ;

export const Home = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

    return ( <AppBar>
    <Toolbar>
      <Button color="inherit">
        <Link to="/Students"> Students </Link>
      </Button>
      <Button color="inherit">
      <Link to="/Employers"> Employers </Link>
      </Button>
      <Button color="inherit">
      <Link to="/Universities"> Universities </Link>
      </Button>
      <Button
          color="inherit"
          onClick={handleMenuClick}
        >
          More
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>About</MenuItem>
          <MenuItem onClick={handleMenuClose}>Join us</MenuItem>
          <MenuItem onClick={handleMenuClose}>Blog</MenuItem>
        </Menu>
        <Box sx={{ flexGrow: 1 }} />
        <Button color="inherit">Log In</Button>
        <Button color="inherit" variant="outlined" sx={{ color: '#fff', borderColor: '#fff' }}>
          Sign Up
        </Button>
    </Toolbar>
  </AppBar>
  );
}  