"use client";
import React from "react";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <nav className={styles.sidebar}>
      <div className={styles.sidebarContent}>
        <div className={styles.menuContainer}>
          <h2 className={styles.menuTitle}>Menu</h2>
          <div className={styles.menuItems}>
            <div className={styles.menuItem}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/69346104e30ec8f43394dce355131d825acde08a?placeholderIfAbsent=true&apiKey=4450958e453149c3ba146ee9b9586ae1"
                alt=""
                className={styles.menuIcon}
              />
              <span>Home</span>
            </div>
            <div className={styles.menuItem}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/dd21ea5208a25850c239e8b8adbd5a717eae6de5?placeholderIfAbsent=true&apiKey=4450958e453149c3ba146ee9b9586ae1"
                alt=""
                className={styles.menuIcon}
              />
              <span>Insights</span>
            </div>
            <div className={styles.menuItem}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d4cb377a0f55c9d69ab4b512b2bb48962bbd6614?placeholderIfAbsent=true&apiKey=4450958e453149c3ba146ee9b9586ae1"
                alt=""
                className={styles.menuIcon}
              />
              <span className={styles.recommends}>Recommends</span>
            </div>
            <div className={styles.menuItem}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6195a58d5e7b648f86f1043675c13f182b46d1bc?placeholderIfAbsent=true&apiKey=4450958e453149c3ba146ee9b9586ae1"
                alt=""
                className={styles.menuIcon}
              />
              <span className={styles.messages}>Messages (2)</span>
            </div>
          </div>
          <h2 className={styles.settingsTitle}>Settings</h2>
          <div className={styles.settingsItems}>
            <div className={styles.menuItem}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/794eb99899cefbf19556b8aaed00c886542eef01?placeholderIfAbsent=true&apiKey=4450958e453149c3ba146ee9b9586ae1"
                alt=""
                className={styles.menuIcon}
              />
              <span>Profile</span>
            </div>
            <div className={styles.menuItem}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3330fce03acf5ce0e248558c72bdeec50a310ea0?placeholderIfAbsent=true&apiKey=4450958e453149c3ba146ee9b9586ae1"
                alt=""
                className={styles.menuIcon}
              />
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
