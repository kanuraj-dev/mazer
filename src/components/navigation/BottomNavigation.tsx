import { Tabs } from "antd";
import { createUseStyles } from "react-jss";
import {
  BellOutlined,
  SearchOutlined,
  ThunderboltOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";

const { TabPane } = Tabs;

function BottomNavigation() {
  const classes = useStyles();

  return (
    <div className={classes.bottomNavigation}>
      <NavLink
        to="/feed"
        activeClassName={classes.activeNavItem}
        className={classes.navItem}
      >
        <ThunderboltOutlined className={classes.navIcon} />
        <div className={classes.navText}>feed</div>
      </NavLink>
      <NavLink
        to="/search"
        activeClassName={classes.activeNavItem}
        className={classes.navItem}
      >
        <SearchOutlined className={classes.navIcon} />
        <div className={classes.navText}>search</div>
      </NavLink>
      <NavLink
        to="/alerts"
        activeClassName={classes.activeNavItem}
        className={classes.navItem}
      >
        <BellOutlined className={classes.navIcon} />
        <div className={classes.navText}>alerts</div>
      </NavLink>
      <NavLink
        to="/profile"
        activeClassName={classes.activeNavItem}
        className={classes.navItem}
      >
        <UserOutlined className={classes.navIcon} />
        <div className={classes.navText}>profile</div>
      </NavLink>
    </div>
  );
}

const useStyles = createUseStyles(({ colors }: Theme) => ({
  bottomNavigation: {
    width: "100%",
    minHeight: "50px",
    background: "#fff",
    position: "fixed",
    bottom: "0",
    padding: "0.5rem",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  navIcon: {
    fontSize: "1.4rem",
  },
  navItem: {
    color: "#030303",

    "& $navText": {
      display: "none",
    },
  },
  navText: {
    fontWeight: "600",
    fontSize: "1.2rem",
    paddingLeft: "5px",
  },
  activeNavItem: {
    width: "7rem",
    padding: "0.3rem 1rem",
    borderRadius: "2.5rem",
    background: "#40e0d0",
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    "& $navText": {
      display: "flex",
    },
    "&:hover": {
      color: "#f7f7f7",
    },
  },
}));

export default BottomNavigation;
