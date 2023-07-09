import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useState } from 'react';

export default function Home() {

  var stl = [styles.cardEnable, styles.cardDisable, styles.cardDisable];
  const [buttonStyle, setButtonStyle] = useState(stl);

  const HandleNavBtn = (num) => {
    stl = [styles.cardDisable, styles.cardDisable, styles.cardDisable];
    stl[num] = styles.cardEnable;
    setButtonStyle(stl);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>




        <div className={styles.grid}>
          <a /* href="https://nextjs.org/docs" */ className={buttonStyle[0]} onClick={() => HandleNavBtn(0)}>
            <h3>Planillas ✏️</h3>
          </a>
          <a /* href="https://nextjs.org/docs" */ className={buttonStyle[1]} onClick={() => HandleNavBtn(1)}>
            <h3>Carruseles 🎠</h3>
          </a>
          <a /* href="https://nextjs.org/docs" */ className={buttonStyle[2]} onClick={() => HandleNavBtn(2)}>
            <h3>Vuelos ✈️</h3>
          </a>
        </div>
      </main>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
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
  )
}
