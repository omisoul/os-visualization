import React, { useState } from "react";
import { Process } from "../../components/Process";

import styles from "../../styles/Visualizer/Visualizer.module.css";

export const Visualizer = ({ processes, algorithm }) => {
  const [newList, setNewList] = useState(processes);

  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  async function test() {
    for (let i = 0; i < processes.length; i++) {
      let tt = processes[i].processTime * 1000;
      console.log(processes[i].id);
      setNewList([...newList, processes[i]]);
      await sleep(tt);
    }
  }

  function createProcesses() {
    test();
    // if (algorithm == "fcfs") {
    //   setNewList([...processes]);
    // } else if (algorithm == "spn") {
    //   setNewList([
    //     ...processes.sort((a, b) =>
    //       a["processTime"] < b["processTime"] ? -1 : 1
    //     ),
    //   ]);
    // } else if (algorithm == "ps") {
    //   setNewList([
    //     ...processes.sort((a, b) => (a["priority"] < b["priority"] ? 1 : -1)),
    //   ]);
    // } else if (algorithm == "rr") {
    //   setNewList([...processes]);
    // }
  }

  return (
    <section className={styles.visualCon}>
      <span className={styles.header_span}>
        <h3>Process Scheduling Algorithm Visualizer</h3>
        <button className={styles.btn} onClick={createProcesses}>
          Start algorithm
        </button>
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
          {newList.map((process) => (
            <Process process={process} key={process.id} />
          ))}
        </div>
      </div>
    </section>
  );
};
