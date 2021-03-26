import { Button } from "antd";
import React from "react";
import { createUseStyles } from "react-jss";
import DemoProfileImg from "../../assets/demo-images/demo-profile-img.svg";

function SuggestedUsersCard() {
  const classes = useStyles();

  return (
    <div className={classes.suggestedUsersCardWrapper}>
      <div className={classes.suggestedUsersCard}>
        <div className={classes.cardTitle}>Suggested for you</div>
        <div className={classes.suggestedUsers}>
          {[1, 2, 3, 4, 5, 6, 7].map((item) => (
            <div className={classes.userCard}>
              <img
                className={classes.userProfileImg}
                src={DemoProfileImg}
                alt="user profile img"
              />
              <div className={classes.userName}>Joener</div>
              <Button
                className={classes.followBtn}
                type="primary"
                shape="round"
                size="small"
              >
                Follow
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const useStyles = createUseStyles(({ colors }: Theme) => ({
  suggestedUsersCardWrapper: {
    padding: "0.5rem",
  },
  suggestedUsersCard: {
    minHeight: "180px",
    background: "#fff",
    padding: "1.2rem 1.5rem",
    fontWeight: "500",
    color: "grey",
    borderRadius: "2rem",
    filter:
      "drop-shadow(0px 38px 76px rgba(0, 0, 0, 0.08)), drop-shadow(0px 8px 24px rgba(0, 0, 0, 0.06))",
  },
  cardTitle: {
    fontSize: "1.05rem",
    paddingLeft: "0.8rem",
  },
  userCard: {
    minWidth: "130px",
    minHeight: "160px",
    margin: "0.5rem",
    background: "#fff",
    padding: "1rem",
    fontWeight: "500",
    borderRadius: "1rem",
    border: "1px solid rgba(149, 151, 161, 0.2)",
    boxShadow: "0px 8px 24px 0px #000000 6%, 0px 38px 76px 0px #000000 8%",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "column",
  },
  suggestedUsers: {
    width: "100%",
    paddingTop: "1rem",
    overflowX: "auto",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",

    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  userProfileImg: {},
  userName: {
    color: "#000",
  },
  followBtn: {
    fontWeight: "500",
    height: "0.9rem",
    fontSize: "0.8rem !important",
  },
}));

export default SuggestedUsersCard;
