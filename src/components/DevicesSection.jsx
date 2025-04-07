"use client";
import React from "react";
import styles from "./DevicesSection.module.css";

const DevicesSection = () => {
  return (
    <section className={styles.devicesSection}>
      <div className={styles.devicesHeader}>
        <h2 className={styles.devicesTitle}>Devices</h2>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/532a561b369244aabf15e221fc4411e7013c96ce?placeholderIfAbsent=true&apiKey=4450958e453149c3ba146ee9b9586ae1"
          alt=""
          className={styles.headerIcon}
        />
      </div>
      <div className={styles.devicesGrid}>
        <div className={styles.deviceCard}>
          <span className={styles.deviceStatus}>Off</span>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bc88d480dfb45978b14388b80d7b24537221e539?placeholderIfAbsent=true&apiKey=4450958e453149c3ba146ee9b9586ae1"
            alt="Air Conditioner"
            className={styles.deviceIcon}
          />
          <h3 className={styles.deviceName}>Air Conditioner</h3>
        </div>
        <div className={`${styles.deviceCard} ${styles.active}`}>
          <span className={styles.deviceStatus}>On</span>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5f5fd09ec9fdf861300da0d8fa3fec4ef5dff0c3?placeholderIfAbsent=true&apiKey=4450958e453149c3ba146ee9b9586ae1"
            alt="Smart TV"
            className={styles.deviceIcon}
          />
          <h3 className={styles.deviceName}>Smart TV</h3>
        </div>
        <div className={styles.deviceCard}>
          <span className={styles.deviceStatus}>Off</span>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e144b926df3561d6ff16f507a36a1d990793cf15?placeholderIfAbsent=true&apiKey=4450958e453149c3ba146ee9b9586ae1"
            alt="Coffee Machine"
            className={styles.deviceIcon}
          />
          <h3 className={styles.deviceName}>Coffee Machine</h3>
        </div>
        <div className={`${styles.deviceCard} ${styles.active}`}>
          <span className={styles.deviceStatus}>On</span>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/14939071a24ac744aee88d761bf52adb2c0bf782?placeholderIfAbsent=true&apiKey=4450958e453149c3ba146ee9b9586ae1"
            alt="Refrigerator"
            className={styles.deviceIcon}
          />
          <h3 className={styles.deviceName}>Refrigerator</h3>
        </div>
      </div>
    </section>
  );
};

export default DevicesSection;
