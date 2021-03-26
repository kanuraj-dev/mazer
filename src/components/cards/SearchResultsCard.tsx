import React from "react";
import { createUseStyles } from "react-jss";
import UserItemCard from "./UserItemCard";

type SearchResultsCardProps = {
  searchResults: Array<any>;
};

function SearchResultsCard({ searchResults }: SearchResultsCardProps) {
  const classes = useStyles();

  return (
    <div className={classes.searchResultsCard}>
      <div className={classes.cardTitle}>
        Search results for "<span>albert man</span>"
      </div>
      <div className={classes.searchResults}>
        {searchResults?.map((result) => (
          <>
            <UserItemCard {...result} />
            <hr className={classes.divider} />
          </>
        ))}
      </div>
    </div>
  );
}

const useStyles = createUseStyles(({ colors }: Theme) => ({
  searchResultsCard: {
    maxWidth: "380px",
    margin: " 0 auto",
    padding: "2rem",
    borderRadius: "3rem",
    background: "#fff",
    boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
  },
  cardTitle: {
    color: "brown",
    fontWeight: "500",
    marginBottom: "1rem",

    "& span": {
      color: "darkgray",
    },
  },
  searchResults: {},
  divider: {
    height: "0.1px",
    padding: "0",
    width: "80%",
    marginLeft: "auto",
    border: "0.75px solid #F2F2F2",

    "&:last-child": {
      display: "none",
    },
  },
}));

export default SearchResultsCard;
