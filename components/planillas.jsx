import { useState } from 'react';
import styles from '../styles/planillas.module.css';

export default function Planillas() {


    const [inputNames, setInputNames] = useState(["", "", "", ""]);
    const [inputCount, setInputCount] = useState(0);

    function daysInMonth(month, year) {
        return new Date(year, month, 0).getDate();
    }

    function GFG_Fun() {
        let date = new Date();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        return (daysInMonth(month, year));
    }

    let heading = ["Lun", "Mar", "Mie", "Jue", "Vie", "Sab", "Dom"]
    var body = [];
    var rows = [];

    const countNames = () => {
        var count = 0;
        inputNames.forEach(element => {
            element ? count++ : {};
        });
        setInputCount(count);
    }

    var fecha = "";

    const populateTable = () => {
        let numDays = GFG_Fun();
        var u = 0;
        let date = new Date();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        fecha = `Planilla ${month}/${year}`;
        const d = new Date(month + " 1 " + year);
        let day = d.getDay();//numero de dia semanal
        switch (inputCount) {
            case 3:
                for (let g = 1; g < day; g++) {
                    rows.push("");
                }
                for (let a = 0; a < numDays; a++) {
                    rows.push(inputNames[u]);
                    rows.push(inputNames[u]);
                    u === 2 ? u = 0 : u++;
                }
                var len = rows.length;
                for (let a = (day - 1); a < len; a++) {
                    if ((a - (day - 2)) <= numDays)
                        rows[a] = (a - (day - 2)) + ". " + rows[a];
                    else
                        rows[a] = "";
                }
                body = [];
                var t = 0;
                var numWeeks = 5;
                if ((day > 5) && (numDays == 31)) { numWeeks = 6; }
                /* aca pushear en body arrays de 7 elementos sacados de rows */
                for (let h = 0; h < numWeeks; h++) {
                    body.push([rows[t], rows[t + 1], rows[t + 2], rows[t + 3], rows[t + 4], rows[t + 5], rows[t + 6]]);
                    t += 7;
                }

                break;
            case 4:
                break;
            default:
                break;
        }
    }

    const renderTable = () => {
        populateTable();
        return (
            <div>
                <h3>{fecha}</h3>
                <table>
                    <thead>
                        <tr>
                            {heading.map((head, i) =>
                                <th key={i}>{head}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {body.map((row, i) =>
                            <tr key={i}>
                                {row.map((val, i) => <td key={i}>{val}</td>)}
                            </tr>)}
                    </tbody>
                </table>
            </div>
        )
    }

    return (
        <div>
            <h3>Creador de Planillas</h3>
            <p>Nombres: </p>
            <div className={styles.nombresContainer}>
                <div><label htmlFor="input1">1:</label>
                    <input type="text" id="input1" className={styles.nombresInput} onChange={(e) => { setInputNames([e.target.value, inputNames[1], inputNames[2], inputNames[3]]); countNames(); }} /><button>+días</button></div>
                <div><label htmlFor="input2">2:</label>
                    <input type="text" id="input2" className={styles.nombresInput} onChange={(e) => { setInputNames([inputNames[0], e.target.value, inputNames[2], inputNames[3]]); countNames(); }} /><button>+días</button></div>
                <div><label htmlFor="input3">3:</label>
                    <input type="text" id="input3" className={styles.nombresInput} onChange={(e) => { setInputNames([inputNames[0], inputNames[1], e.target.value, inputNames[3]]); countNames(); }} /><button>+días</button></div>
                <div><label htmlFor="input4">4:</label>
                    <input type="text" id="input4" className={styles.nombresInput} onChange={(e) => { setInputNames([inputNames[0], inputNames[1], inputNames[2], e.target.value]); countNames(); }} /><button>+días</button></div>
            </div>

            <hr className={styles.hrDashed}></hr>

            {(inputCount >= 3) ? renderTable() : <div></div>}

        </div>
    )
}

/* Considerando 2 personas x dia:
Habiendo 3 personas:
112233112233 (4x2)
Habiendo 4 personas:
12,12,34,34,12 (2x2)
*/