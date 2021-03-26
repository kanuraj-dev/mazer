import React from "react";
import { createUseStyles } from "react-jss";
import PostCard from "../../cards/PostCard";
import SuggestedUsersCard from "../../cards/SuggestedUsersCard";

function Feed() {
  const classes = useStyles();

  return (
    <div className={classes.feedPage}>
      <SuggestedUsersCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </div>
  );
}

const useStyles = createUseStyles(({ colors }: Theme) => ({
  feedPage: {
    minHeight: "150vh",
  },
}));

export default Feed;
