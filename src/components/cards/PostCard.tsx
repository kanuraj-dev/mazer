import React from "react";
import { createUseStyles } from "react-jss";
import DemoProfileImg from "../../assets/demo-images/demo-profile-img.svg";
import DemoPostImg from "../../assets/demo-images/demo-post-img.svg";
import {
  LikeOutlined,
  MessageOutlined,
  UploadOutlined,
} from "@ant-design/icons";

function PostCard() {
  const classes = useStyles();

  return (
    <div className={classes.postCardWrapper}>
      <div className={classes.postCard}>
        <div className={classes.postCardHeader}>
          <img
            className={classes.headerProfileImg}
            src={DemoProfileImg}
            alt="author profile img"
          />
          <div>
            <div className={classes.authorName}>Albert Patel</div>
            <div className={classes.postTime}>12 March 2021 at 10:43 AM</div>
          </div>
        </div>
        <img className={classes.postImage} src={DemoPostImg} alt="post img" />
        <div className={classes.postCaption}>
          <strong>alberto_232</strong>
          {"  "} Hey, look at this and tell me your opinion about this. is it
          good enough to showcase in my portfolio?😅
        </div>
        <div className={classes.postActions}>
          <div className={classes.actionBtn}>
            <LikeOutlined />
          </div>
          <div className={classes.actionBtn}>
            <MessageOutlined />
          </div>
          <div className={classes.actionBtn}>
            <UploadOutlined />
          </div>
        </div>
      </div>
    </div>
  );
}

const useStyles = createUseStyles(({ colors }: Theme) => ({
  postCardWrapper: {
    padding: "0.5rem",
  },
  postCard: {
    minHeight: "350px",
    background: "#fff",
    borderRadius: "2rem",
    overflow: "hidden",
  },
  postCardHeader: {
    minHeight: "50px",
    padding: "1rem 1.5rem",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  headerProfileImg: {
    width: "50px",
    height: "50px",
    marginRight: "1rem",
  },
  authorName: {
    fontWeight: "700",
    fontSize: "1.1rem",
  },
  postTime: {
    fontWeight: "500",
    color: "grey",
    fontSize: "0.9rem",
  },
  postImage: {
    width: "100%",
  },
  postCaption: {
    fontWeight: "600",
    padding: "0.7rem 1.5rem 0 1.5rem ",
  },
  postActions: {
    padding: "1rem 1.5rem",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  actionBtn: {
    height: "40px",
    width: "40px",
    marginRight: "1.5rem",

    background: "#ededed",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "1.2rem",

    "&:last-child": {
      marginLeft: "auto",
      marginRight: "0",
    },
  },
}));

export default PostCard;
