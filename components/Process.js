import React from "react";

import styles from "../styles/Processes/Process.module.css";

export const Process = ({ process }) => {
  return (
    <div className={styles.processCon}>
      <p>
        Process ID: <span>{process.id}</span>
      </p>
      <p>
        Time Taken: <span>{process.processTime}</span>
      </p>
      <p>
        Arrival Time: <span>{process.processLength}</span>
      </p>
      <p>
        Service Time: <span>0</span>
      </p>

      <div className={styles.progressBar}></div>
    </div>
  );
};
