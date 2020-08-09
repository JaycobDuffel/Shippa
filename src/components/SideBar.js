import React, { useContext, useEffect } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Signin from "./Signin.js";
import Signup from "./Signup.js";
import Home from "./Home";
import CheckPrice from "./pricecheck/CheckPrice";
import NewOrder from "./NewOrder/NewOrder";
import Signout from "./Signout";
import { AuthContext } from "../contexts/authContext";
import { Link } from "react-router-dom";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import ReceiptIcon from "@material-ui/icons/Receipt";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SettingsIcon from "@material-ui/icons/Settings";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    mt: 8,
  },
  appBar: {
    backgroundColor: "#fffcfd",
    color: "black",
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function MiniDrawer({ setCheckLogin, checkLogin }) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const { authUser } = useContext(AuthContext);

  useEffect(() => {
    setCheckLogin(false);
  }, [checkLogin]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
            
          </IconButton>
          <a href="/"><img src="https://i.ibb.co/R033KYd/LOGO.png" alt="LOGO" border="0" height="50px" mt={2}/></a>
          <Home />
            {authUser? <Signout setCheckLogin={setCheckLogin} /> : <Signup setCheckLogin={setCheckLogin} />}
            {authUser? '' : <Signin setCheckLogin={setCheckLogin} />}
            <CheckPrice />
            {authUser? <NewOrder /> : '' }
            {authUser? <h1>Hello {authUser.name}</h1> : ""}
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
            <ListItem button >
              <ListItemIcon><LocalShippingIcon /></ListItemIcon>
              <ListItemText />
              <Link style={{color: 'black', textDecoration: 'none'}} to='/shipments'>
                Shipments
              </Link>
            </ListItem>
            <ListItem button >
              <ListItemIcon><ReceiptIcon /></ListItemIcon>
              <ListItemText />
              <Link style={{color: 'black', textDecoration: 'none'}} to='/invoices'>
                Invoices
              </Link>
            </ListItem>
            <ListItem button >
              <ListItemIcon><AccountCircleIcon /></ListItemIcon>
              <ListItemText />
              <Link style={{color: 'black', textDecoration: 'none'}} to='/shipments'>
                Profile
              </Link>
            </ListItem>
            <ListItem button >
              <ListItemIcon><SettingsIcon /></ListItemIcon>
              <ListItemText />
              <Link style={{color: 'black', textDecoration: 'none'}} to='/shipments'>
                Settings
              </Link>
            </ListItem>
        </List>
      </Drawer>
    </div>
  );
}
