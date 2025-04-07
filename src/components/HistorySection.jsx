"use client";
import React from "react";
import styles from "./HistorySection.module.css";

const HistorySection = () => {
  return (
    <aside className={styles.historySection}>
      <div className={styles.historyHeader}>
        <h2 className={styles.historyTitle}>History</h2>
        <button className={styles.viewAllButton}>View all</button>
      </div>
      <div className={styles.historyList}>
        <div className={styles.historyItem}>
          <div className={styles.itemContent}>
            <div className={styles.statusIndicator} />
            <div className={styles.itemDetails}>
              <h3 className={styles.deviceName}>Air Conditioner</h3>
              <p className={styles.actionText}>Turned on</p>
            </div>
          </div>
          <time className={styles.timestamp}>03:20 PM</time>
        </div>
        <div className={styles.historyItem}>
          <div className={styles.itemContent}>
            <div className={styles.statusIndicator} />
            <div className={styles.itemDetails}>
              <h3 className={styles.deviceName}>Refrigerator</h3>
              <p className={styles.actionText}>Turned on</p>
            </div>
          </div>
          <time className={styles.timestamp}>01:48 PM</time>
        </div>
        <div className={styles.historyItem}>
          <div className={styles.itemContent}>
            <div className={`${styles.statusIndicator} ${styles.off}`} />
            <div className={styles.itemDetails}>
              <h3 className={styles.deviceName}>Air Conditioner</h3>
              <p className={styles.actionText}>Turned off</p>
            </div>
          </div>
          <time className={styles.timestamp}>11:36 AM</time>
        </div>
        <div className={styles.historyItem}>
          <div className={styles.itemContent}>
            <div className={styles.statusIndicator} />
            <div className={styles.itemDetails}>
              <h3 className={styles.deviceName}>Coffee Machine</h3>
              <p className={styles.actionText}>Turned off</p>
            </div>
          </div>
          <time className={styles.timestamp}>09:15 AM</time>
        </div>
      </div>
    </aside>
  );
};

export default HistorySection;
