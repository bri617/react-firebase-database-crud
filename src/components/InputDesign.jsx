"use client";
import React from "react";
import styles from "./InputDesign.module.css";
import SearchBar from "./SearchBar";
import RoomCard from "./RoomCard";
import EnergyChart from "./EnergyChart";
import DeviceCard from "./DeviceCard";
import HistoryItem from "./HistoryItem";

const InputDesign = () => {
  return (
    <main className={styles.mainContainer}>
      <section className={styles.dashboardContent}>
        <div className={styles.roomsSection}>
          <header className={styles.sectionHeader}>
            <h1 className={styles.rooms}>Rooms</h1>
            <SearchBar />
          </header>

          <div className={styles.roomsGrid}>
            <RoomCard
              type="kitchen"
              deviceCount={8}
              image="https://cdn.builder.io/api/v1/image/assets/TEMP/5ec7b3aca72d39e59a6f1f695a4606759a24b119?placeholderIfAbsent=true&apiKey=4450958e453149c3ba146ee9b9586ae1"
              isActive={true}
            />
            <RoomCard
              type="livingRoom"
              deviceCount={12}
              image="https://cdn.builder.io/api/v1/image/assets/TEMP/5a50663f694ec78d4839b34f6dde798e2e1e4887?placeholderIfAbsent=true&apiKey=4450958e453149c3ba146ee9b9586ae1"
            />
            <RoomCard
              type="bedroom"
              deviceCount={4}
              image="https://cdn.builder.io/api/v1/image/assets/TEMP/9a0bbcdb6f1337594017dfd34bd534fc3e86b976?placeholderIfAbsent=true&apiKey=4450958e453149c3ba146ee9b9586ae1"
            />
            <RoomCard
              type="bathroom"
              deviceCount={3}
              image="https://cdn.builder.io/api/v1/image/assets/TEMP/31c207eef3581e919e7d62bb5567729ceb51896d?placeholderIfAbsent=true&apiKey=4450958e453149c3ba146ee9b9586ae1"
            />
          </div>
        </div>

        <section className={styles.levelsSection}>
          <header className={styles.sectionHeader}>
            <h2>Levels</h2>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/532a561b369244aabf15e221fc4411e7013c96ce?placeholderIfAbsent=true&apiKey=4450958e453149c3ba146ee9b9586ae1"
              alt="More options"
              className={styles.optionsIcon}
            />
          </header>

          <div className={styles.chartsContainer}>
            <EnergyChart
              title="Kitchen Energy"
              type="daily"
              icon="https://cdn.builder.io/api/v1/image/assets/TEMP/2d604fb4340ae5de13c2bd780f8a7a3ff16b6f9d?placeholderIfAbsent=true&apiKey=4450958e453149c3ba146ee9b9586ae1"
            />
            <EnergyChart
              title="Total Energy"
              type="weekly"
              icon="https://cdn.builder.io/api/v1/image/assets/TEMP/0336d6d1d4ff356318aac83b58336b4e981b9ba8?placeholderIfAbsent=true&apiKey=4450958e453149c3ba146ee9b9586ae1"
            />
          </div>
        </section>

        <section className={styles.devicesSection}>
          <header className={styles.sectionHeader}>
            <h2>Devices</h2>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/532a561b369244aabf15e221fc4411e7013c96ce?placeholderIfAbsent=true&apiKey=4450958e453149c3ba146ee9b9586ae1"
              alt="More options"
              className={styles.optionsIcon}
            />
          </header>

          <div className={styles.devicesGrid}>
            <DeviceCard
              name="Air Conditioner"
              status="off"
              icon="https://cdn.builder.io/api/v1/image/assets/TEMP/bc88d480dfb45978b14388b80d7b24537221e539?placeholderIfAbsent=true&apiKey=4450958e453149c3ba146ee9b9586ae1"
            />
            <DeviceCard
              name="Smart TV"
              status="on"
              icon="https://cdn.builder.io/api/v1/image/assets/TEMP/5f5fd09ec9fdf861300da0d8fa3fec4ef5dff0c3?placeholderIfAbsent=true&apiKey=4450958e453149c3ba146ee9b9586ae1"
            />
            <DeviceCard
              name="Coffee Machine"
              status="off"
              icon="https://cdn.builder.io/api/v1/image/assets/TEMP/e144b926df3561d6ff16f507a36a1d990793cf15?placeholderIfAbsent=true&apiKey=4450958e453149c3ba146ee9b9586ae1"
            />
            <DeviceCard
              name="Refrigerator"
              status="on"
              icon="https://cdn.builder.io/api/v1/image/assets/TEMP/14939071a24ac744aee88d761bf52adb2c0bf782?placeholderIfAbsent=true&apiKey=4450958e453149c3ba146ee9b9586ae1"
            />
          </div>
        </section>
      </section>

      <aside className={styles.historyPanel}>
        <header className={styles.historyHeader}>
          <h2 className={styles.history}>History</h2>
          <button className={styles.viewall}>View all</button>
        </header>

        <div className={styles.historyContent}>
          <HistoryItem device="Air Conditioner" action="on" time="03:20 PM" />
          <HistoryItem device="Refrigerator" action="on" time="01:48 PM" />
          <HistoryItem device="Air Conditioner" action="off" time="11:36 AM" />
          <HistoryItem device="Coffee Machine" action="off" time="09:15 AM" />
        </div>
      </aside>
    </main>
  );
};

export default InputDesign;
