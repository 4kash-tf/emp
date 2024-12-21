import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';

const Navbar = () => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        MY_APP
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 2 }}>
                        <Link to="/add" style={{ textDecoration: 'none' }}>
                            <Button color="inherit">Add</Button>
                        </Link>

                        <Link to="/View" style={{ textDecoration: 'none' }}>
                            <Button color="inherit">View</Button>
                        </Link>
                    </Box>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar;
