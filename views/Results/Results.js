import React, { useEffect, useState } from "react";
import styles from "../../styles/Main.module.css";

export const Results = ({ results }) => {
  const [re, setRe] = useState("");
  useEffect(() => {
    let newString = "";
    for (let i = 0; i < results.length; i++) {
      if (i < results.length - 1) {
        newString += results[i] + " -> ";
      } else {
        newString += results[i];
      }
    }
    setRe(newString);
  }, [results]);
  return (
    <div className={styles.resultsCon}>
      <p>Process Order based on the algorithm choosen:</p>
      <p className={styles.results}>{re}</p>
    </div>
  );
};
