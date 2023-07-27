import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Link } from "react-router-dom";
import styles from './appbar.module.css'
import {CgProfile} from 'react-icons/cg'
import BasicAccordion from "../accordion/BasicAccordion";


function MyAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const FeaturesStyles ={
    color: 'black',
    border: 'none',
  }

  return (
    <AppBar position="static" className={styles.appbar_conatiner}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Link to="/">RegXchange</Link>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }} 
              className={styles.appbar_box}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
              className={styles.appbar_menu}
            >
              <MenuItem className={styles.appbar_menuitem}>
                  <Typography textAlign="center" > <BasicAccordion parent="Features"  style={FeaturesStyles} /></Typography>
                </MenuItem>
                <MenuItem  onClick={handleCloseNavMenu} className={styles.appbar_menuitem}>
                  <Typography textAlign="center"> <Link to="/prices">Prices</Link></Typography>
                </MenuItem>
                <MenuItem  onClick={handleCloseNavMenu} className={styles.appbar_menuitem}>
                  <Typography textAlign="center"> <Link to="/institution">Institutions</Link></Typography>
                </MenuItem>
                <MenuItem  onClick={handleCloseNavMenu} className={styles.appbar_menuitem}>
                  <Typography textAlign="center"> <Link to="/more">More</Link></Typography>
                </MenuItem>
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Link to="/">RegXchange</Link>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <Link to='/features'>Features</Link>
              </Button>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <Link to='/prices'>Prices</Link>
              </Button>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <Link to='/institution'>Institution</Link>
              </Button>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <Link to='/more'>More</Link>
              </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip >
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, color: 'white' }}>
               <CgProfile />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
              
              className={styles.appbar_menu}
            >
                <MenuItem  onClick={handleCloseUserMenu} className={styles.appbar_menuitem}>
                    <Link to="/profile" ><Typography textAlign="center">Profile</Typography></Link>
                  
                </MenuItem>
                <MenuItem  onClick={handleCloseUserMenu} className={styles.appbar_menuitem}>
                    <Link to="/account"><Typography textAlign="center">Account</Typography></Link>
                  
                </MenuItem>
                <MenuItem  onClick={handleCloseUserMenu} className={styles.appbar_menuitem}>
                    <Link to="/login"><Typography textAlign="center">Login</Typography></Link>
                  
                </MenuItem>
                <MenuItem  onClick={handleCloseUserMenu} className={styles.appbar_menuitem}>
                    <Link to="/sign-up"><Typography textAlign="center">Sign Up</Typography></Link>
                  
                </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default MyAppBar;
