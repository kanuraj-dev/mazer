import { createUseStyles } from "react-jss";
import {
  BellOutlined,
  SearchOutlined,
  ThunderboltOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";

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
    height: "60px",
    background: "#fff",
    zIndex: "10",
    position: "fixed",
    bottom: "0",
    padding: "0.5rem",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    boxShadow: "1px 8px 27px 2px rgba(0,0,0,0.3)",
  },
  navIcon: {
    fontSize: "1.4rem",
  },
  navItem: {
    width: "7rem",
    height: "40px",
    color: "#030303",
    transition: "all .5s",
    padding: "0.3rem 1rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    "& $navText": {
      display: "none",
    },
  },
  navText: {
    fontWeight: "600",
    fontSize: "1rem",
    paddingLeft: "5px",
  },
  activeNavItem: {
    color: "#fff",
    borderRadius: "2.5rem",
    background: "#40e0d0",

    "& $navText": {
      display: "flex",
    },
    "&:hover": {
      color: "#f7f7f7",
    },
  },
}));

export default BottomNavigation;
