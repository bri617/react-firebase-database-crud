import React from "react";
import styles from "./InputDesign.module.css";

const HistoryItem = ({ device, action, time }) => {
  return (
    <article className={styles.historyItem}>
      <div className={styles.historyContent}>
        <div
          className={`${styles.statusDot} ${action === "on" ? styles.statusOn : styles.statusOff}`}
        />
        <div className={styles.historyDetails}>
          <h3 className={styles.deviceName}>{device}</h3>
          <p className={styles.actionText}>Turned {action}</p>
        </div>
      </div>
      <time className={styles.historyTime}>{time}</time>
    </article>
  );
};

export default HistoryItem;
