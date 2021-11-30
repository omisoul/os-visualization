import React, { useState, useEffect } from "react";
import styles from "../../styles/Algoselector/AlgoSelector.module.css";
export const AlgorithmSelector = ({ processes, setProcesses }) => {
  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  const [algorithm, setAlgorithm] = useState("fcfs");

  const [quantum, setQuantum] = useState(0);
  const [noProcesses, setNoProcesses] = useState(4);
  const [minLen, setMinLen] = useState(1);
  const [maxLen, setMaxLen] = useState(1);
  const [minTime, setMinTime] = useState(1);
  const [maxTime, setMaxTime] = useState(1);
  //   const [processes, setProcesses] = useState([]);

  useEffect(() => {
    console.log(processes);
  }, [processes]);

  async function handleSubmit(e) {
    e.preventDefault();

    let processList = [];
    setMaxLen(Math.floor(maxLen));
    setMinLen(Math.ceil(minLen));
    setMaxTime(Math.floor(maxTime));
    setMinTime(Math.ceil(minTime));
    setQuantum(Math.floor(quantum));

    for (let x = 0; x < Math.floor(noProcesses); x++) {
      processList.push({
        id: "P" + (x + 1),
        processTime:
          Math.floor(Math.random() * (maxTime - minTime + 1)) + minTime,
        processLength:
          Math.floor(Math.random() * (maxLen - minLen + 1)) + minLen,
        priority: Math.floor(Math.random() * noProcesses) + 1,
      });
    }
    setProcesses([...processList]);

    //fcfs
    for (let i = 0; i < processes.length; i++) {
      let timeTaken = processes[i]["processTime"] * 1000;

      await sleep(timeTaken);
      console.log(processes[i]["id"]);
    }

    //sjf
    setSJFProcesses([
      ...processes.sort((a, b) =>
        a["processTime"] > b["processTime"] ? 1 : -1
      ),
    ]);

    console.log(sjfProcesses);
    for (let i = 0; i < sjfProcesses.length; i++) {
      let timeTaken = sjfProcesses[i]["processTime"] * 1000;

      await sleep(timeTaken);
      console.log(sjfProcesses[i]["id"]);
    }
  }

  return (
    <section>
      <h3>Algorithm Selector</h3>

      <form className={styles.selectCon} onSubmit={handleSubmit}>
        <span>
          <label htmlFor="algoselect">Scheduling Algorithm</label>
          <select
            name="algoselect"
            value={algorithm}
            onChange={(e) => {
              setAlgorithm(e.target.value);
            }}
          >
            <option value="fcfs">First Come First Serve</option>
            <option value="sjf">Shortest Job First</option>
            <option value="ps">Priority Scheduling</option>
            <option value="rr">Round Robin</option>
          </select>
        </span>

        <div className={styles.inputCons}>
          <span className="input_span">
            <label htmlFor="no_processes">Number of Processes</label>
            <input
              type="number"
              value={noProcesses}
              id="no_processes"
              name="no_processes"
              className="options"
              onChange={(e) => setNoProcesses(parseInt(e.target.value))}
            ></input>
          </span>
          <span className="input_span">
            <label htmlFor="quantum">Quantum</label>
            <input
              type="number"
              value={quantum}
              id="quantum"
              name="quantum"
              className="options"
              onChange={(e) => setQuantum(parseInt(e.target.value))}
            ></input>
          </span>
        </div>

        <div className={styles.inputCons}>
          <span className="input_span">
            <label htmlFor="min_length">Min Length</label>
            <input
              type="number"
              value={minLen}
              id="min_length"
              name="min_length"
              className="options"
              onChange={(e) => setMinLen(parseInt(e.target.value))}
            ></input>
          </span>
          <span className="input_span">
            <label htmlFor="max_length">Max Length</label>
            <input
              type="number"
              value={maxLen}
              id="max_length"
              name="max_length"
              className="options"
              onChange={(e) => setMaxLen(parseInt(e.target.value))}
            ></input>
          </span>
        </div>

        <div className={styles.inputCons}>
          <span className="input_span">
            <label htmlFor="min_time">Min Time</label>
            <input
              type="number"
              value={minTime}
              id="min_time"
              name="min_time"
              className="options"
              onChange={(e) => setMinTime(parseInt(e.target.value))}
            ></input>
          </span>
          <span className="input_span">
            <label htmlFor="max_time">Max Time</label>
            <input
              type="number"
              value={maxTime}
              id="max_time"
              name="max_time"
              className="options"
              onChange={(e) => setMaxTime(parseInt(e.target.value))}
            ></input>
          </span>
        </div>

        <input
          type="submit"
          value="Generate Processes"
          className={styles.btn}
        />
      </form>
    </section>
  );
};
