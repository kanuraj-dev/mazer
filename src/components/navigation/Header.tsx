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
  },
}));

export default Header;
