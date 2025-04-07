"use client";
import React from "react";
import styles from "./InputDesign.module.css";

const SearchBar = () => {
  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchBar}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6fe4875f75c3dcb8fb2b4cc279b5d7239f5121a6?placeholderIfAbsent=true&apiKey=4450958e453149c3ba146ee9b9586ae1"
          alt="Search"
          className={styles.searchIcon}
        />
        <input
          type="text"
          placeholder="Search..."
          className={styles.searchInput}
        />
      </div>
    </div>
  );
};

export default SearchBar;
