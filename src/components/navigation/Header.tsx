import { createUseStyles } from "react-jss";
import Logo from "../logo/Logo";

function Header() {
  const classes = useStyles();

  return (
    <div className={classes.header}>
      <Logo />
    </div>
  );
}

const useStyles = createUseStyles(({ colors }: Theme) => ({
  header: {
    minHeight: "50px",
    background: "#fff",
    borderBottom: "3px solid orange",
    // boxShadow: "1px -10px 27px 2px rgba(0,0,0,0.3)",
  },
}));

export default Header;
