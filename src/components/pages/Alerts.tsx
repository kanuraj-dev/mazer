import { createUseStyles } from "react-jss";

function Alerts() {
  const classes = useStyles();

  return <div className={classes.alertsPage}>Alerts Page</div>;
}

const useStyles = createUseStyles(({ colors }: Theme) => ({
  alertsPage: {
    minHeight: "90vh",
    background: "#fff",
    fontSize: "2rem",
    fontWeight: "800",
    padding: "0 2rem",
    color: "grey",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default Alerts;
