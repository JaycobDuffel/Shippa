import React, { useContext, useEffect } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
} from "@material-ui/core";
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
    backgroundColor: "#fafafa",
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
      {authUser ? (
        <>
          <CssBaseline />
            <AppBar
              position="fixed"
              className={clsx(classes.appBar, {
                [classes.appBarShift]: open,
              })}
            >
              <Toolbar>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
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
                    <a href="/">
                      <img
                        src="https://i.ibb.co/R033KYd/LOGO.png"
                        alt="shippa"
                        border="0"
                        height="60px"
                        style={{ marginTop: "10px", marginRight: '30px' }}
                      />{" "}
                    </a>
                    <Home />
                    {authUser ? (
                      <Signout setCheckLogin={setCheckLogin} />
                    ) : (
                      <Signup setCheckLogin={setCheckLogin} />
                    )}
                    {authUser ? "" : <Signin setCheckLogin={setCheckLogin} />}
                    <CheckPrice />
                    {authUser ? <NewOrder /> : ""}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      position: 'absolute',
                      right:'30px'
                    }}
                  >
                    <h3 style={{ color: "#3C3B3D", marginRight: '15px' }}>
                      {authUser.name}
                    </h3>
                    <Avatar
                      alt="Remy Sharp"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ4_5ok2dFJdtGb2rxCfr9LDbuy_ypgNhT2bA&usqp=CAU"
                      className={classes.small}
                    />
                  </div>
                </div>
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
              <ListItem button>
                <ListItemIcon>
                  <Link style={{ color: "#707070", textDecoration: "none" }} to='/shipments' >
                  <LocalShippingIcon />
                  </Link>
                </ListItemIcon>
                <ListItemText />
                <Link
                  style={{ color: "black", textDecoration: "none" }}
                  to="/shipments"
                  onClick={handleDrawerClose}
                >
                  Shipments
                </Link>
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <Link
                  to="/invoices"
                  style={{ color: "#707070", textDecoration: "none" }}
                  >
                  <ReceiptIcon />
                  </Link>
                </ListItemIcon>
                <ListItemText />
                <Link
                  style={{ color: "black", textDecoration: "none" }}
                  to="/invoices"
                >
                  Invoices
                </Link>
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <Link
                  to="/profile"
                  style={{ color: "#707070", textDecoration: "none" }}
                  >
                  <AccountCircleIcon />
                  </Link>
                </ListItemIcon>
                <ListItemText />
                <Link
                  style={{ color: "black", textDecoration: "none" }}
                  to="/profile"
                >
                  Profile
                </Link>
              </ListItem>
            </List>
          </Drawer>
        </>
      ) : (
        <>
          <CssBaseline />
          <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
              [classes.appBarShift]: open,
            })}
          >
            <Toolbar style={{ marginLeft: "25px" }}>
              <a href="/">
                <img
                  src="https://i.ibb.co/R033KYd/LOGO.png"
                  alt="shippa"
                  border="0"
                  height="50px"
                  style={{ marginTop: "10px", marginRight: '30px' }}
                />{" "}
              </a>
              <Home />
              {authUser ? (
                <Signout setCheckLogin={setCheckLogin} />
              ) : (
                <Signup setCheckLogin={setCheckLogin} />
              )}
              {authUser ? "" : <Signin setCheckLogin={setCheckLogin} />}
              <CheckPrice />
                {authUser ? <NewOrder /> : ""}
                {authUser ? <h1>Hello {authUser.name}</h1> : ""}
            </Toolbar>
          </AppBar>
        </>
      )}
    </div>
  );
}
