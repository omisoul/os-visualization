import React from "react";

import styles from "../../styles/Processes/Processes.module.css";
export const Processes = () => {
  return (
    <section>
      <div className={styles.processesCon}>
        <h3>Processes</h3>

        <table>
          <tr>
            <th>Process</th>
            <th>Order</th>
            <th>Length</th>
            <th>Priority</th>
          </tr>
          <tr>
            <td>P1</td>
            <td>0</td>
            <td>0</td>
            <td>12</td>
          </tr>
          <tr>
            <td>P2</td>
            <td>0</td>
            <td>0</td>
            <td>12</td>
          </tr>
        </table>
      </div>
    </section>
  );
};
