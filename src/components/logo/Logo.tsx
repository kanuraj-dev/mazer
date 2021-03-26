import { ThunderboltOutlined } from "@ant-design/icons";
import { createUseStyles } from "react-jss";

function Logo() {
  const classes = useStyles();

  return (
    <div className={classes.logo}>
      <ThunderboltOutlined className={classes.logoIcon} />
      <div className={classes.logoText}>Mazer</div>
    </div>
  );
}

const useStyles = createUseStyles(({ colors }: Theme) => ({
  logo: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "5px",
  },
  logoIcon: {
    fontSize: "1.7rem",
    fontWeight: "900",
    margin: "5px",
  },
  logoText: {
    fontSize: "1.5rem",
    fontWeight: "700",
    fontStyle: "italic",
  },
}));

export default Logo;
