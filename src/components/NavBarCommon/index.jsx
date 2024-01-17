import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { Button, Container, Typography } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import BookTrailModal from "components/Modal";
import { NavLink } from "react-router-dom";

const NavBarCommon = () => {

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = _ => setMobileOpen((prevState) => !prevState);
  

  const drawer = (
    <Box
      onClick={() => handleDrawerToggle()}
      sx={{ textAlign: "center" }}
      px={3}
    >
      <List>
        <ListItem>
          <NavLink to={"/home" }sx={{ color: "black", textDecoration: "none" }}>
            Home
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink to={"/About"} sx={{ color: "black", textDecoration: "none" }}>
            About
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink to={"/Trails"} sx={{ color: "black", textDecoration: "none" }}>
            Trails
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink to={"/News"} sx={{ color: "black", textDecoration: "none" }}>
            News
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink to={"/Contact"} sx={{ color: "black", textDecoration: "none" }}>
            Contact
          </NavLink>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box>
      <AppBar component="nav" sx={{ bgcolor: "black" }}>
        <Container maxWidth={"lg"}>
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <NavLink
              variant="h6"
              component="div"
              style={{
                display: { xs: "none", sm: "none", md: "block" },
                color: "white", width: "100%", flexGrow: 1
              }}
              
              to={"/home"}
          
            >
              <Typography
                bgcolor={"red"}
                color={"black"}
                display={{ xs: "none", sm: "none", md: "block" }}
                position={"absolute"}
                width={160}
                top={0}
                textAlign={"center"}
                fontSize={20}
                fontWeight={700}
                py={4}
              >
                <NavLink
                  to={"/home"}
                  style={
                    ({ isActive }) => {
                      return {
                        display: { xs: "none", sm: "none", md: "block" },
                        textDecoration: "none",
                        color:isActive ? "black" : "white",
                      };
                    }
                  }
                >
                  Mount Sleet{""} <br />
                  <small style={{ fontWeight: 400 }}>Winter Tours</small>
                </NavLink>
              </Typography>
            </NavLink>
            <List
              sx={{
                display: { xs: "none", sm: "none", md: "flex" },
                p: "1.8em",
              }}
            >
              <ListItem>
                <NavLink
                  to={"/About"}
                  style={({ isActive }) => {
                    return {
                      textDecoration: "none",
                      color:isActive ? "orange" : "white",
                    };
                  }}
                >
                  About
                </NavLink>
              </ListItem>
              <ListItem>
                <NavLink
                  
                  to={"/Trails"}
                   style={({ isActive }) => {
                    return {
                      textDecoration: "none",
                      color:isActive ? "orange" : "white",
                    };
                  }}
                >
                  Trails
                </NavLink>
              </ListItem>
              <ListItem>
                <NavLink
                  // onClick={() => navigate('/news')}
                  to={"/News"}
                   style={({ isActive }) => {
                    return {
                      textDecoration: "none",
                      color:isActive ? "orange" : "white",
                    };
                  }}
                >
                  New
                </NavLink>
              </ListItem>
              <ListItem>
                <NavLink
                  // onClick={() => navigate('/contact')}
                  to={"/contact"}
                   style={({ isActive }) => {
                    return {
                      textDecoration: "none",
                      color:isActive ? "orange" : "white",
                    };
                  }}
                >
                  Contact
                </NavLink>
              </ListItem>
            </List>
            <Button color="error" sx={{ display: "flex" }}>
              <AccountCircle sx={{ mr: 0.6, fontSize: "2.3em" }} /> LogIn
            </Button>
            <BookTrailModal />
          </Toolbar>
        </Container>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box" },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Toolbar />
    </Box>
  );
};
export default NavBarCommon;
