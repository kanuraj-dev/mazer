import { SearchOutlined } from "@ant-design/icons";
import React from "react";
import { createUseStyles } from "react-jss";

function SearchField() {
  const classes = useStyles();

  return (
    <div className={classes.searchField}>
      <SearchOutlined className={classes.searchIcon} />
      <input
        type="search"
        placeholder="Search for users..."
        spellCheck="false"
        className={classes.inputField}
      />
    </div>
  );
}

const useStyles = createUseStyles(({ colors }: Theme) => ({
  searchField: {
    height: "50px",
    padding: "1rem",
    borderRadius: "2rem",
    background: "#fff",
    // boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
    border: "2px solid green",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  searchIcon: {
    margin: "0 10px",
    fontSize: "1.4rem",
  },
  inputField: {
    flex: "1",
    fontWeight: "500",
    fontSize: "1.1rem",

    outline: "none",
    border: "none",
    lineHeight: "80%",
  },
}));

export default SearchField;
