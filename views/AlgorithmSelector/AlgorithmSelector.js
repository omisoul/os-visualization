import React, { useState } from "react";
import styles from "../../styles/Algoselector/AlgoSelector.module.css";
export const AlgorithmSelector = () => {
  const [algorithm, setAlgorithm] = useState("fcfs");

  return (
    <section>
      <h3>Algorithm Selector</h3>

      <form className={styles.selectCon}>
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
            <label htmlFor="">Number of processes</label>
            <input type="number" name="" id="" />
          </span>
          <span className="input_span">
            <label htmlFor="">Quantum</label>
            <input type="number" name="" id="" />
          </span>
        </div>

        <div className={styles.inputCons}>
          <span className="input_span">
            <label htmlFor="">Min Length</label>
            <input type="number" name="" id="" />
          </span>
          <span className="input_span">
            <label htmlFor="">Max Length</label>
            <input type="number" name="" id="" />
          </span>
        </div>

        <div className={styles.inputCons}>
          <span className="input_span">
            <label htmlFor="">Min Time</label>
            <input type="number" name="" id="" />
          </span>
          <span className="input_span">
            <label htmlFor="">Max Time</label>
            <input type="number" name="" id="" />
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
