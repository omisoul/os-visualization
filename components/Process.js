import React from "react";

import styles from "../styles/Processes/Process.module.css";

export const Process = () => {
  return (
    <div className={styles.processCon}>
      <p>
        Process ID: <span>P1</span>
      </p>
      <p>
        Time Taken: <span>4secs</span>
      </p>
      <p>
        Arrival Time: <span>0</span>
      </p>
      <p>
        Service Time: <span>0</span>
      </p>

      <div className={styles.progressBar}></div>
    </div>
  );
};
