import { createUseStyles } from "react-jss";

function Profile() {
  const classes = useStyles();

  return <div className={classes.profilePage}>Profile Page</div>;
}

const useStyles = createUseStyles(({ colors }: Theme) => ({
  profilePage: {
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

export default Profile;
