import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import styles from "./appbar.module.css";
import { CgProfile } from "react-icons/cg";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { logout } from "../../auth/firebase/firebase";
import { useNavigate } from "react-router-dom";
function MyAppBar() {
  const {logOut} = useContext(UserContext)
  const {isLoggedIn} = useContext(UserContext); 
  const navigate = useNavigate('')
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const {user} = useContext(UserContext);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const displayName =()=>{
    if(user){
      return user.displayName
      
    }
  }

  const handleLogout = ()=>{
    logout();
    logOut();
    navigate("/login")
  }

  return (
    <AppBar
      position="static"
      className={styles.appbar_conatiner}
      sx={{
        background: "var(--color-dark)",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1000
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters className={styles.toolbar}>
          <span>
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
          {/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} /> */}
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
          </span>
         
         <span>
         <Box sx={{ flexGrow: 0 }}>
            <Tooltip>
              <IconButton
                onClick={handleOpenUserMenu}
                sx={{ p: 0, color: "white" }}
              ><span style={{fontSize:'1rem', margin: '0rem 0.5rem'}}>{isLoggedIn? displayName() : null}</span>
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
              <MenuItem
                onClick={handleCloseUserMenu}
                className={styles.appbar_menuitem}
              >
                {isLoggedIn?<Link to="/profile">
                  <Typography textAlign="center">Profile</Typography>
                </Link> : <Link to="/login">
                  <Typography textAlign="center">Login</Typography>
                </Link> }
                
              </MenuItem>
              <MenuItem
                onClick={handleCloseUserMenu}
                className={styles.appbar_menuitem}
              >
                {isLoggedIn?<Link to="/dashboard">
                  <Typography textAlign="center">Trade</Typography>
                </Link> : <Link to="/sign-up">
                  <Typography textAlign="center">Sign Up</Typography>
                </Link>}
              </MenuItem>
              {isLoggedIn &&
              <MenuItem
                onClick={handleCloseUserMenu}
                className={styles.appbar_menuitem}
              >
                 <Link >
                  <Typography textAlign="center" onClick={handleLogout}>Logout</Typography>
                </Link> 
              </MenuItem>
              }
            </Menu>
          </Box>
         </span>

          
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default MyAppBar;
