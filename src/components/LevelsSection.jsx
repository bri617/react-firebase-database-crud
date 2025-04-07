"use client";
import React from "react";
import styles from "./LevelsSection.module.css";

const LevelsSection = () => {
  return (
    <section className={styles.levelsSection}>
      <div className={styles.levelsHeader}>
        <h2 className={styles.levelsTitle}>Levels</h2>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/532a561b369244aabf15e221fc4411e7013c96ce?placeholderIfAbsent=true&apiKey=4450958e453149c3ba146ee9b9586ae1"
          alt=""
          className={styles.headerIcon}
        />
      </div>
      <div className={styles.levelsContent}>
        <div className={styles.energyCard}>
          <div className={styles.cardHeader}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2d604fb4340ae5de13c2bd780f8a7a3ff16b6f9d?placeholderIfAbsent=true&apiKey=4450958e453149c3ba146ee9b9586ae1"
              alt=""
              className={styles.cardIcon}
            />
            <h3 className={styles.cardTitle}>Kitchen Energy</h3>
            <div className={styles.periodSelector}>
              <span>Today</span>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/46e662a296fbcb872755f5090f0c9c193565385d?placeholderIfAbsent=true&apiKey=4450958e453149c3ba146ee9b9586ae1"
                alt=""
                className={styles.selectorIcon}
              />
            </div>
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3ebfc25ce2b4a71007b5bcb2b076ba9d68c17065?placeholderIfAbsent=true&apiKey=4450958e453149c3ba146ee9b9586ae1"
            alt="Energy Graph"
            className={styles.graphImage}
          />
          <div className={styles.graphDividers}>
            {Array(6)
              .fill(null)
              .map((_, index) => (
                <div key={index} className={styles.divider} />
              ))}
          </div>
          <div className={styles.timeLabels}>
            <span>12 PM</span>
            <span>1 PM</span>
            <span>2 PM</span>
            <span>3 PM</span>
            <span>4 PM</span>
            <span>5 PM</span>
          </div>
        </div>
        <div className={styles.totalEnergyCard}>
          <div className={styles.cardHeader}>
            <div className={styles.titleGroup}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0336d6d1d4ff356318aac83b58336b4e981b9ba8?placeholderIfAbsent=true&apiKey=4450958e453149c3ba146ee9b9586ae1"
                alt=""
                className={styles.cardIcon}
              />
              <h3 className={styles.cardTitle}>Total Energy</h3>
            </div>
            <div className={styles.periodSelector}>
              <span>Week</span>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/46e662a296fbcb872755f5090f0c9c193565385d?placeholderIfAbsent=true&apiKey=4450958e453149c3ba146ee9b9586ae1"
                alt=""
                className={styles.selectorIcon}
              />
            </div>
          </div>
          <div className={styles.weeklyGraph}>
            {/* Weekly energy graph implementation */}
            <div className={styles.graphBars}>
              <div className={styles.bar} style={{ height: "30px" }} />
              <div className={styles.bar} style={{ height: "52px" }} />
              <div className={styles.bar} style={{ height: "34px" }} />
              <div className={styles.bar} style={{ height: "60px" }} />
              <div className={styles.bar} style={{ height: "48px" }} />
              <div className={styles.activeBar}>
                <span className={styles.energyValue}>20.6 kWh</span>
                <div className={styles.barIndicator} />
              </div>
              <div className={styles.bar} style={{ height: "67px" }} />
            </div>
          </div>
          <div className={styles.weekDays}>
            <span>Sun</span>
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
            <span>Sat</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LevelsSection;
