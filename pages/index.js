import Head from "next/head";
import { useEffect, useState } from "react";

import styles from "../styles/Main.module.css";
import { AlgorithmSelector } from "../views/AlgorithmSelector/AlgorithmSelector";
import { Processes } from "../views/Processes/Processes";
import { Visualizer } from "../views/Visualizer/Visualizer";

export default function Home() {
  const [quantum, setQuantum] = useState(0);
  const [noProcesses, setNoProcesses] = useState(4);
  const [minLen, setMinLen] = useState(1);
  const [maxLen, setMaxLen] = useState(1);
  const [minTime, setMinTime] = useState(1);
  const [maxTime, setMaxTime] = useState(1);
  const [processes, setProcesses] = useState([]);

  useEffect(() => {
    console.log(processes);
  }, [processes]);

  function handleSubmit(e) {
    e.preventDefault();

    let processList = [];
    setMaxLen(Math.floor(maxLen));
    setMinLen(Math.ceil(minLen));
    setMaxTime(Math.floor(maxTime));
    setMinTime(Math.ceil(minTime));
    setQuantum(Math.floor(quantum));

    for (let x = 0; x < Math.floor(noProcesses); x++) {
      processList.push({
        processTime:
          Math.floor(Math.random() * (maxTime - minTime + 1)) + minTime,
        processLength:
          Math.floor(Math.random() * (maxLen - minLen + 1)) + minLen,
      });
    }
    setProcesses(processList);
  }

  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main>
        <div className="1">
          <form onSubmit={handleSubmit}>
            <select name="algorithms" id="selector">
              <option value="fcfs">First Come First Serve</option>
              <option value="sjb">Shortest Job First</option>
              <option value="ps">Priority Scheduling</option>
              <option value="rr">Round Robin</option>
            </select>

            <label htmlFor="no_processes">Number of Processes</label>
            <input
              type="number"
              value={noProcesses}
              id="no_processes"
              name="no_processes"
              className="options"
              onChange={(e) => setNoProcesses(e.target.value)}
            ></input>
            <label htmlFor="quantum">Quantum</label>
            <input
              type="number"
              value={quantum}
              id="quantum"
              name="quantum"
              className="options"
              onChange={(e) => setQuantum(e.target.value)}
            ></input>
            <label htmlFor="min_length">Min Length</label>
            <input
              type="number"
              value={minLen}
              id="min_length"
              name="min_length"
              className="options"
              onChange={(e) => setMinLen(e.target.value)}
            ></input>
            <label htmlFor="max_length">Max Length</label>
            <input
              type="number"
              value={maxLen}
              id="max_length"
              name="max_length"
              className="options"
              onChange={(e) => setMaxLen(e.target.value)}
            ></input>
            <label htmlFor="min_time">Min Time</label>
            <input
              type="number"
              value={minTime}
              id="min_time"
              name="min_time"
              className="options"
              onChange={(e) => setMinTime(e.target.value)}
            ></input>
            <label htmlFor="max_time">Max Time</label>
            <input
              type="number"
              value={maxTime}
              id="max_time"
              name="max_time"
              className="options"
              onChange={(e) => setMaxTime(e.target.value)}
            ></input>

            <input type="submit" value="Generate Processes" />
          </form>
        </div>

        <div className="process_details"></div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <img src="/vercel.svg" alt="Vercel" className="logo" />
        </a>
      </footer>

      <div className={styles.container}>
        <div className={styles.leftCon}>
          <AlgorithmSelector />
          <Processes />
        </div>

        <div className={styles.rightCon}>
          <Visualizer />
        </div>
      </div>
    </div>
  );
}
