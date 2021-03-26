import React from "react";
import { createUseStyles } from "react-jss";
import PostCard from "../cards/PostCard";
import SuggestedUsersCard from "../cards/SuggestedUsersCard";
import DemoProfileImg from "../../assets/demo-images/demo-profile-img.svg";
import DemoPostImg from "../../assets/demo-images/demo-post-img.svg";
import { Col, Row } from "antd";

function Feed() {
  const classes = useStyles();

  const postCards = [
    {
      post_id: 1,
      author_img: DemoProfileImg,
      author_name: "Albert Nikson",
      author_username: "albnik_273",
      post_time: "12 March 2021 at 10:43 AM",
      post_image: DemoPostImg,
      post_caption:
        "Hey, look at this and tell me your opinion about this. is it good enough to showcase in my portfolio?😅 Hey, look at this and tell me your opinion about this. is it good enough to showcase in my portfolio?",
      likes: {
        count: 45,
        likers: [],
      },
      comments: {
        count: 12,
        commentors: [],
      },
    },
    {
      post_id: 1,
      author_img: DemoProfileImg,
      author_name: "Albert Nikson",
      author_username: "albnik_273",
      post_time: "12 March 2021 at 10:43 AM",
      post_image: DemoPostImg,
      post_caption:
        "Hey, look at this and tell me your opinion about this. is it good enough to showcase in my portfolio?😅",
      likes: {
        count: 45,
        likers: [],
      },
      comments: {
        count: 12,
        commentors: [],
      },
    },
    {
      post_id: 1,
      author_img: DemoProfileImg,
      author_name: "Albert Nikson",
      author_username: "albnik_273",
      post_time: "12 March 2021 at 10:43 AM",
      post_image: DemoPostImg,
      post_caption:
        "Hey, look at this and tell me your opinion about this. is it good enough to showcase in my portfolio?😅",
      likes: {
        count: 45,
        likers: [],
      },
      comments: {
        count: 12,
        commentors: [],
      },
    },
    {
      post_id: 1,
      author_img: DemoProfileImg,
      author_name: "Albert Nikson",
      author_username: "albnik_273",
      post_time: "12 March 2021 at 10:43 AM",
      post_image: DemoPostImg,
      post_caption:
        "Hey, look at this and tell me your opinion about this. is it good enough to showcase in my portfolio?😅",
      likes: {
        count: 45,
        likers: [],
      },
      comments: {
        count: 12,
        commentors: [],
      },
    },
    {
      post_id: 1,
      author_img: DemoProfileImg,
      author_name: "Albert Nikson",
      author_username: "albnik_273",
      post_time: "12 March 2021 at 10:43 AM",
      post_image: DemoPostImg,
      post_caption:
        "Hey, look at this and tell me your opinion about this. is it good enough to showcase in my portfolio?😅",
      likes: {
        count: 45,
        likers: [],
      },
      comments: {
        count: 12,
        commentors: [],
      },
    },
    {
      post_id: 1,
      author_img: DemoProfileImg,
      author_name: "Albert Nikson",
      author_username: "albnik_273",
      post_time: "12 March 2021 at 10:43 AM",
      post_image: DemoPostImg,
      post_caption:
        "Hey, look at this and tell me your opinion about this. is it good enough to showcase in my portfolio?😅",
      likes: {
        count: 45,
        likers: [],
      },
      comments: {
        count: 12,
        commentors: [],
      },
    },
    {
      post_id: 1,
      author_img: DemoProfileImg,
      author_name: "Albert Nikson",
      author_username: "albnik_273",
      post_time: "12 March 2021 at 10:43 AM",
      post_image: DemoPostImg,
      post_caption:
        "Hey, look at this and tell me your opinion about this. is it good enough to showcase in my portfolio?😅",
      likes: {
        count: 45,
        likers: [],
      },
      comments: {
        count: 12,
        commentors: [],
      },
    },
    {
      post_id: 1,
      author_img: DemoProfileImg,
      author_name: "Albert Nikson",
      author_username: "albnik_273",
      post_time: "12 March 2021 at 10:43 AM",
      post_image: DemoPostImg,
      post_caption:
        "Hey, look at this and tell me your opinion about this. is it good enough to showcase in my portfolio?😅",
      likes: {
        count: 45,
        likers: [],
      },
      comments: {
        count: 12,
        commentors: [],
      },
    },
    {
      post_id: 1,
      author_img: DemoProfileImg,
      author_name: "Albert Nikson",
      author_username: "albnik_273",
      post_time: "12 March 2021 at 10:43 AM",
      post_image: DemoPostImg,
      post_caption:
        "Hey, look at this and tell me your opinion about this. is it good enough to showcase in my portfolio?😅",
      likes: {
        count: 45,
        likers: [],
      },
      comments: {
        count: 12,
        commentors: [],
      },
    },
  ];

  return (
    <Row className={classes.feedPage}>
      <Col sm={24} lg={17} className={classes.autoMargin}>
        <SuggestedUsersCard />
      </Col>
      {postCards?.map((post) => (
        <Col sm={24} lg={8}>
          <PostCard {...post} />
        </Col>
      ))}
    </Row>
  );
}

const useStyles = createUseStyles(({ colors }: Theme) => ({
  feedPage: {
    minHeight: "150vh",
    paddingBottom: "5rem",
  },
  autoMargin: {
    margin: "auto",
  },
}));

export default Feed;
