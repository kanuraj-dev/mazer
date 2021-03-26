import React from "react";
import { createUseStyles } from "react-jss";

type UserItemCardProps = {
  image: any;
  username: string;
  name: string;
};

function UserItemCard({ image, username, name }: UserItemCardProps) {
  const classes = useStyles();

  return (
    <div className={classes.userItemCard}>
      <img className={classes.userImg} src={image} alt="User image" />
      <div>
        <div className={classes.userName}>{username}</div>
        <div className={classes.name}>{name}</div>
      </div>
    </div>
  );
}

const useStyles = createUseStyles(({ colors }: Theme) => ({
  userItemCard: {
    minHeight: "50px",
    margin: "5px 0",
    padding: "0.5rem 0",

    background: "#fff",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  userImg: {
    width: "50px",
    height: "50px",
    marginRight: "1rem",
  },
  userName: {
    fontSize: "1.05rem",
    fontWeight: "700",
    opacity: "0.8",
  },
  name: {
    color: "grey",
    fontWeight: "500",
    fontSize: "0.8rem",
  },
}));

export default UserItemCard;
