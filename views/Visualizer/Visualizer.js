import React, { useEffect, useState } from "react";
import { Process } from "../../components/Process";

import styles from "../../styles/Visualizer/Visualizer.module.css";

export const Visualizer = ({ processes, algorithm, setResults }) => {
  const [newList, setNewList] = useState(processes);
  const [testList, setTestList] = useState([]);
  const [timeTaken, setTimeTaken] = useState(0);

  const [algoType, setAlgoType] = useState("");

  useEffect(() => {
    if (algorithm == "fcfs") {
      setAlgoType("First Come First Serve");
    } else if (algorithm == "spn") {
      setAlgoType("Shortest Job Next");
    } else if (algorithm == "rr") {
      setAlgoType("Round Robin");
    } else {
      setAlgoType("Priority Scheduling");
    }
  }, [algorithm]);

  let totalTime = 0;

  for (let i = 0; i < newList.length; i++) {
    totalTime += newList[i].processTime;
  }
  let items = 0;
  let newTime = 0;
  let timer = 0;
  let sTimer = 0;

  let scheduleUpdate = async () => {
    if (newList.length > 0) {
      timer = setTimeout(update, newList[items].processTime * 1000);
    }
  };

  let timeUpdate = () => {
    if (timeTaken < totalTime) {
      console.log(totalTime);
      sTimer = setTimeout(updateTime, 1000);
    }
  };

  let update = () => {
    let tList = newList.slice(0, items + 1);
    console.log(tList);
    setTestList([...tList]);
    items += 1;
    if (items < newList.length) {
      scheduleUpdate();
    }
  };

  let updateTime = () => {
    newTime = newTime + 1;
    setTimeTaken(newTime);
    if (newTime < totalTime) {
      timeUpdate();
    }
  };
  useEffect(() => {
    scheduleUpdate();

    return () => {
      clearTimeout(timer);
    };
  }, [newList]);

  useEffect(() => {
    timeUpdate();
    let values = newList.map((process) => console.log(process));
    setResults();

    return () => {
      clearTimeout(sTimer);
    };
  }, [newList]);

  function createProcesses() {
    setTestList([]);
    setTimeTaken(0);
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
      setNewList([...processes]);
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
          Currently showing: <span>{algoType}</span>
        </p>
        <p>
          Time taken: <span>{timeTaken}</span>
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
