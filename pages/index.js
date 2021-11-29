import Head from "next/head";

import styles from "../styles/Main.module.css";
import { AlgorithmSelector } from "../views/AlgorithmSelector/AlgorithmSelector";
import { Processes } from "../views/Processes/Processes";
import { Visualizer } from "../views/Visualizer/Visualizer";

export default function Home() {
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