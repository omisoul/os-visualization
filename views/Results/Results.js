import React from "react";
import styles from "../../styles/Main.module.css";

export const Results = ({ results }) => {
  console.log(results);
  return (
    <div className={styles.resultsCon}>
      <p>Process Order based on the algorithm choosen:</p>
      <p className={styles.results}>{"P1 -> P2 -> P3 -> P4"}</p>
    </div>
  );
};
