"use client";
import React from "react";
import styles from "./RoomsSection.module.css";

const RoomsSection = () => {
  return (
    <section className={styles.roomsSection}>
      <div className={styles.roomsHeader}>
        <h1 className={styles.roomsTitle}>Rooms</h1>
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
      </div>
      <div className={styles.roomsGrid}>
        <div className={styles.roomCard}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5ec7b3aca72d39e59a6f1f695a4606759a24b119?placeholderIfAbsent=true&apiKey=4450958e453149c3ba146ee9b9586ae1"
            alt="Kitchen"
            className={styles.roomIcon}
          />
          <h3 className={styles.roomName}>Kitchen</h3>
          <p className={styles.deviceCount}>8 Devices</p>
        </div>
        <div className={styles.roomCard}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5a50663f694ec78d4839b34f6dde798e2e1e4887?placeholderIfAbsent=true&apiKey=4450958e453149c3ba146ee9b9586ae1"
            alt="Living Room"
            className={styles.roomIcon}
          />
          <h3 className={styles.roomName}>Living Room</h3>
          <p className={styles.deviceCount}>12 Devices</p>
        </div>
        <div className={styles.roomCard}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9a0bbcdb6f1337594017dfd34bd534fc3e86b976?placeholderIfAbsent=true&apiKey=4450958e453149c3ba146ee9b9586ae1"
            alt="Bedroom"
            className={styles.roomIcon}
          />
          <h3 className={styles.roomName}>Bedroom</h3>
          <p className={styles.deviceCount}>4 Devices</p>
        </div>
        <div className={styles.roomCard}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/31c207eef3581e919e7d62bb5567729ceb51896d?placeholderIfAbsent=true&apiKey=4450958e453149c3ba146ee9b9586ae1"
            alt="Bathroom"
            className={styles.roomIcon}
          />
          <h3 className={styles.roomName}>Bathroom</h3>
          <p className={styles.deviceCount}>3 Devices</p>
        </div>
      </div>
    </section>
  );
};

export default RoomsSection;
