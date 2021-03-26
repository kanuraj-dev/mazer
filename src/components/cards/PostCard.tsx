import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import {
  LikeOutlined,
  MessageOutlined,
  UploadOutlined,
} from "@ant-design/icons";

const truncateString = (string: string, maxLength = 50) => {
  if (!string) return null;
  if (string.length <= maxLength) return string;
  return `${string.substring(0, maxLength)}...`;
};

const isCaptionLong = (caption: string, maxLength = 90) => {
  if (!caption) return null;
  if (caption.length <= maxLength) return false;
  return true;
};

type PostCardProps = {
  post_id: any;
  author_img: any;
  author_name: any;
  author_username: any;
  post_time: any;
  post_image: any;
  post_caption: any;
  likes: any;
  comments: any;
};

function PostCard({
  post_id,
  author_img,
  author_name,
  author_username,
  post_time,
  post_image,
  post_caption,
  likes,
  comments,
}: PostCardProps) {
  const classes = useStyles();
  const [showMore, setShowMore] = useState(false);

  return (
    <div className={classes.postCardWrapper}>
      <div className={classes.postCard}>
        <div className={classes.postCardHeader}>
          <img
            className={classes.headerProfileImg}
            src={author_img}
            alt="author profile img"
          />
          <div>
            <div className={classes.authorName}>{author_name}</div>
            <div className={classes.postTime}>{post_time}</div>
          </div>
        </div>
        <img className={classes.postImage} src={post_image} alt="post img" />
        <div className={classes.postCaption}>
          <strong>{author_username}</strong>
          {/* truncate string if caption is long */}
          {showMore ? post_caption : truncateString(post_caption, 90)}

          {/* show "hide/more buttons only if caption is long enough" */}
          {isCaptionLong(post_caption) && (
            <span
              className={classes.showMoreLessBtn}
              onClick={() => setShowMore(!showMore)}
            >
              {/* change text  */}
              {showMore ? "Show Less" : "Show More"}
            </span>
          )}
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
    color: "grey",

    "& strong": {
      color: "#111",
      paddingRight: "5px",
      opacity: "0.85",
    },
  },
  showMoreLessBtn: {
    color: "brown",
    paddingLeft: "5px",
    fontWeight: "500",
    cursor: "pointer",
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
