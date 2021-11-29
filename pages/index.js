import Head from "next/head";
import { useEffect, useState } from "react";

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
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
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

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
