import React, { useEffect, useState } from "react";

import styles from "../styles/Processes/Process.module.css";

export const Process = ({ process }) => {
  // const [time, setTime] = useState(0);
  // let newTime = 0;
  // let timer = 0;
  // useEffect(() => {
  //   scheduleUpdate();
  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, []);

  // let scheduleUpdate = () => {
  //   timer = setTimeout(update, 1000);
  // };
  // let update = () => {
  //   if (time < process.processTime) {
  //     newTime = newTime + 1;
  //     setTime(newTime);
  //   }
  //   if (newTime < process.processTime) {
  //     scheduleUpdate();
  //   }
  // };
  return (
    <div className={styles.processCon}>
      <p>
        Process ID: <span>{process.name}</span>
      </p>
      {/* <p>
        Time Taken: <span>{time}</span>
      </p> */}
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
