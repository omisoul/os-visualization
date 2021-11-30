import React, { useEffect, useState } from "react";
import { Process } from "../../components/Process";

import styles from "../../styles/Visualizer/Visualizer.module.css";

export const Visualizer = ({ processes, algorithm, quantum }) => {
  const [newList, setNewList] = useState(processes);
  const [testList, setTestList] = useState([]);
  // const [tProcess, setTProcess] = useState({})

  let items = 0;

  const [prev, setPrev] = useState([]);

  let timer = 0;

  let scheduleUpdate = () => {
    if (newList.length > 0) {
      timer = setTimeout(update, newList[items].processTime * 1000);
    }
  };

  let update = () => {
    let tList = newList.slice(0, items + 1);
    setTestList([...tList]);
    items += 1;
    if (items < newList.length) {
      scheduleUpdate();
    }
  };

  useEffect(() => {
    scheduleUpdate();

    return () => {
      clearTimeout(timer);
    };
  }, [newList]);

  function createProcesses() {
    setTestList([]);
    if (algorithm == "fcfs") {
      setNewList([...processes]);
    } else if (algorithm == "spn") {
      setNewList([
        ...processes.sort((a, b) =>
          a["processTime"] < b["processTime"] ? -1 : 1
        ),
      ]);
    } else if (algorithm == "ps") {
      setNewList([
        ...processes.sort((a, b) => (b["priority"] < a["priority"] ? -1 : 1)),
      ]);
    } else if (algorithm == "rr") {
      let times = processes.map((process) => process.processTime);
      let isAllZero = false;
      let pList = [];
      let count = 0;
      while (!isAllZero) {
        for (let i = 0; i < times.length; i++) {
          console.log(count);
          if (times[i] > quantum) {
            pList.push({
              id: count,
              name: "P" + i,
              arrivalTime: i,
              processTime: quantum,
              processLength: 1,
              priority: 1,
            });
            times[i] = times[i] - quantum;
            count += 1;
          } else {
            pList.push({
              id: count,
              name: "P" + i,
              arrivalTime: i,
              processTime: times[i],
              processLength: 1,
              priority: 1,
            });
            times[i] = 0;
            count += 1;
          }
          // count += 1;
        }

        isAllZero = times.every((el) => el === 0);
      }

      setNewList([...pList]);

      console.log(pList);
    }
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
          {testList.map((process) => (
            <Process process={process} key={process.id} />
          ))}
        </div>
      </div>
    </section>
  );
};
