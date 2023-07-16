import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useState } from 'react';
import Planillas from '../components/planillas';
import Carruseles from '../components/carruseles';
import Vuelos from '../components/vuelos';
import { store } from '../redux/store'
import { Provider } from 'react-redux'
import { StrictMode } from 'react';

export default function Home() {

  var stl = [styles.cardEnable, styles.cardDisable, styles.cardDisable];
  const [buttonStyle, setButtonStyle] = useState(stl);
  const [mainComponent, setMainComponent] = useState(<Planillas />);

  const HandleNavBtn = (num) => {
    stl = [styles.cardDisable, styles.cardDisable, styles.cardDisable];
    stl[num] = styles.cardEnable;
    setButtonStyle(stl);
    switch (num) {
      case 0:
        setMainComponent(<Planillas />);
        break;
      case 1:
        setMainComponent(<Carruseles />);
        break;
      case 2:
        setMainComponent(<Vuelos />);
        break;
    }
  };

  return (
    <StrictMode>
      <Provider store={store}>
        <div>
          <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <main>
            <div className={styles.componentMarginBottom}>
              {mainComponent}
            </div>

            <div className={styles.grid}>
              <a /* href="https://nextjs.org/docs" */ className={buttonStyle[0]} onClick={() => HandleNavBtn(0)}>
                <h3>Planillas<br />✏️</h3>
              </a>
              <a /* href="https://nextjs.org/docs" */ className={buttonStyle[1]} onClick={() => HandleNavBtn(1)}>
                <h3>Carruseles<br />🧳</h3>
              </a>
              <a /* href="https://nextjs.org/docs" */ className={buttonStyle[2]} onClick={() => HandleNavBtn(2)}>
                <h3>Vuelos<br />✈️</h3>
              </a>
            </div>
          </main>

          <style jsx>{`
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
      table {
        border-collapse: collapse;
        width: 100%;
        }
        td {
        white-space: nowrap;
        border: 1px solid #dddddd;
        text-align: left;
        padding: 5px;
        }
        th {
        white-space: nowrap;
        border: 1px solid #dddddd;
        text-align: left;
        padding: 5px;
        position: sticky;
        top: 0;
        background-color: #dddddd;
        }
        tr:nth-child(even) {
        background-color: #dddddd;
        }
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
      </Provider>
    </StrictMode>
  )
}