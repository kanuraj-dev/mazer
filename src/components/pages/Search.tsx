import React from "react";
import { createUseStyles } from "react-jss";
import SearchField from "../../dataEntry/SearchField";
import SearchResultsCard from "../cards/SearchResultsCard";
import DemoProfileImg from "../../assets/demo-images/demo-profile-img.svg";

const searchResults = [
  {
    image: DemoProfileImg,
    username: "allbert_12",
    name: "Alberto backer",
  },
  {
    image: DemoProfileImg,
    username: "allbert_12",
    name: "Alberto backer",
  },
  {
    image: DemoProfileImg,
    username: "allbert_12",
    name: "Alberto backer",
  },
  {
    image: DemoProfileImg,
    username: "allbert_12",
    name: "Alberto backer",
  },
  {
    image: DemoProfileImg,
    username: "allbert_12",
    name: "Alberto backer",
  },
];

function Search() {
  const classes = useStyles();

  return (
    <div className={classes.searchPage}>
      <div className={classes.searchField}>
        <SearchField />
      </div>
      <SearchResultsCard searchResults={searchResults} />
    </div>
  );
}

const useStyles = createUseStyles(({ colors }: Theme) => ({
  searchPage: {
    minHeight: "100vh",
    background: "#fff",
  },
  searchField: {
    maxWidth: "500px",
    margin: "0 auto",
    padding: "1.5rem 1rem",
  },
}));

export default Search;
