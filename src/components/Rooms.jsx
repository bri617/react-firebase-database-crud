import React from "react";
import styles from "./InputDesign.module.css";

const RoomCard = ({ type, deviceCount, image, isActive }) => {
  const roomNames = {
    kitchen: "Kitchen",
    livingRoom: "Living Room",
    bedroom: "Bedroom",
    bathroom: "Bathroom",
  };

  return (
    <article
      className={`${styles.roomCard} ${isActive ? styles.activeRoom : ""}`}
    >
      <img src={image} alt={roomNames[type]} className={styles.roomIcon} />
      <h3 className={styles.roomName}>{roomNames[type]}</h3>
      <p className={styles.deviceCount}>{deviceCount} Devices</p>
    </article>
  );
};

export default RoomCard;
