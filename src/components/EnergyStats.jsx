"use client";
import React from "react";
import styles from "./InputDesign.module.css";

const EnergyChart = ({ title, type, icon }) => {
  return (
    <article className={styles.chartCard}>
      <header className={styles.chartHeader}>
        <div className={styles.chartTitle}>
          <img src={icon} alt={title} className={styles.chartIcon} />
          <h3>{title}</h3>
        </div>
        <div className={styles.chartPeriod}>
          <span>{type === "daily" ? "Today" : "Week"}</span>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/46e662a296fbcb872755f5090f0c9c193565385d?placeholderIfAbsent=true&apiKey=4450958e453149c3ba146ee9b9586ae1"
            alt="More"
            className={styles.moreIcon}
          />
        </div>
      </header>

      {type === "daily" ? (
        <>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3ebfc25ce2b4a71007b5bcb2b076ba9d68c17065?placeholderIfAbsent=true&apiKey=4450958e453149c3ba146ee9b9586ae1"
            alt="Daily chart"
            className={styles.chartImage}
          />
          <div className={styles.timeMarkers}>
            {["12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"].map((time) => (
              <div key={time} className={styles.timeMarker}>
                {time}
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <div className={styles.weeklyChart}>
            <div className={styles.chartBars}>
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                (day, index) => (
                  <div key={day} className={styles.barContainer}>
                    <div
                      className={`${styles.bar} ${index === 3 ? styles.activeBar : ""}`}
                      style={{ height: index === 3 ? "60px" : "30px" }}
                    />
                    <span className={styles.dayLabel}>{day}</span>
                  </div>
                ),
              )}
            </div>
          </div>
        </>
      )}
    </article>
  );
};

export default EnergyChart;
