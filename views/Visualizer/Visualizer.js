import React from "react";
import { Process } from "../../components/Process";

import styles from "../../styles/Visualizer/Visualizer.module.css";

export const Visualizer = () => {
  return (
    <section className={styles.visualCon}>
      <span className={styles.header_span}>
        <h3>Process Scheduling Algorithm Visualizer</h3>
        <button className={styles.btn}>Start algorithm</button>
      </span>

      <span className={styles.text_span}>
        <p>
          Currently showing: <span>First Come First Serve</span>
        </p>
        <p>
          Time taken: <span>13secs</span>
        </p>
      </span>

      <div className={styles.outerProcessCon}>
        <div className={styles.processCon}>
          <Process />
          <Process />
          <Process />
          <Process />
          <Process />
          <Process />
          <Process />
          <Process />
          <Process />
          <Process />
          <Process />
          <Process />
          <Process />
          <Process />
          <Process />
          <Process />
        </div>
      </div>
    </section>
  );
};
