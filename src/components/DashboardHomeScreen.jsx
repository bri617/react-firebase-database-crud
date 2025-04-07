"use client";
import React from "react";
import Sidebar from "./Sidebar";
import RoomsSection from "./RoomsSection";
import LevelsSection from "./LevelsSection";
import DevicesSection from "./DevicesSection";
import HistorySection from "./HistorySection";
import styles from "./DashboardHomeScreen.module.css";

const DashboardHomeScreen = () => {
  return (
    <main className={styles.dashboardHomeScreen}>
      <div className={styles.contentWrapper}>
        <Sidebar />
        <section className={styles.mainContent}>
          <div className={styles.contentContainer}>
            <RoomsSection />
            <LevelsSection />
            <DevicesSection />
            <HistorySection />
          </div>
        </section>
      </div>
    </main>
  );
};

export default DashboardHomeScreen;
