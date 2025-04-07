import React from "react";
import styles from "./InputDesign.module.css";

const DeviceCard = ({ name, status, icon }) => {
  return (
    <article
      className={`${styles.deviceCard} ${status === "on" ? styles.deviceActive : ""}`}
    >
      <p className={styles.deviceStatus}>{status === "on" ? "On" : "Off"}</p>
      <img src={icon} alt={name} className={styles.deviceIcon} />
      <h3 className={styles.deviceName}>{name}</h3>
    </article>
  );
};

export default DeviceCard;
