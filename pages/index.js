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
