import Head from "next/head";
import { useState } from "react";

import styles from "../styles/Main.module.css";
import { AlgorithmSelector } from "../views/AlgorithmSelector/AlgorithmSelector";
import { Processes } from "../views/Processes/Processes";
import { Results } from "../views/Results/Results";
import { Visualizer } from "../views/Visualizer/Visualizer";

export default function Home() {
  const [processes, setProcesses] = useState([]);
  const [algorithm, setAlgorithm] = useState("fcfs");
  const [results, setResults] = useState([]);

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
          <AlgorithmSelector
            processes={processes}
            setProcesses={setProcesses}
            algorithm={algorithm}
            setAlgorithm={setAlgorithm}
          />
          <Processes processes={processes} setProcesses={setProcesses} />
        </div>

        <div className={styles.rightCon}>
          <Visualizer
            processes={processes}
            algorithm={algorithm}
            setResults={setResults}
          />
          <Results results={results} />
        </div>
      </div>
    </div>
  );
}
