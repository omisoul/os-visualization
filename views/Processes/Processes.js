import React, { useEffect } from "react";

import styles from "../../styles/Processes/Processes.module.css";
export const Processes = ({ processes, setProcesses }) => {
  //   useEffect(() => {
  //     setProcesses(processes);
  //   }, [processes]);

  console.log(processes);
  if (processes.length > 0) {
    console.log("help 2");
  }
  return (
    <section>
      <div className={styles.processesCon}>
        <h3>Processes</h3>
        <div className={styles.outerCon}>
          <div className={styles.innerCon}>
            <table>
              <tr>
                <th>Process</th>
                <th>Order</th>
                <th>Length</th>
                <th>Priority</th>
              </tr>

              <tbody>
                {processes.length > 0 &&
                  processes.map((process) => {
                    return (
                      <tr key={process.id}>
                        <td>{process.id}</td>
                        <td>{process.processTime}</td>
                        <td>{process.processLength}</td>
                        <td>{process.priority}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
