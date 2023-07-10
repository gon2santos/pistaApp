import { useState } from 'react';
import styles from '../styles/planillas.module.css';

export default function Planillas() {


    const [inputNames, setInputNames] = useState(["", "", "", ""]);

    function daysInMonth(month, year) {
        return new Date(year, month, 0).getDate();
    }

    function GFG_Fun() {
        let date = new Date();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        return (daysInMonth(month, year));
    }

    let heading = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"]
    var body = [];
    var rows = [];

    const [showTable, setShowTable] = useState(false);

    const countNames = () => {
        var count = 0;
        inputNames.forEach(element => {
            element ? count++ : {};
        });
        return count;
    }

    const populateTable = () => {
        let nameCount = countNames();
        let numDays = GFG_Fun();
        var u = 0;
        switch (nameCount) {
            case 3:
                for (let a = 0; a < numDays; a++) {
                    rows.push(inputNames[u]);
                    rows.push(inputNames[u]);
                    u === 2 ? u = 0 : u++;
                }
                body = [];
                var t = 0;
                /* aca pushear en body arrays de 7 elementos sacados de rows */
                for (let h = 0; h < 5; h++) {
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

    const HandleCreateBtn = () => {
        setShowTable(!showTable)
    }/* alert(GFG_Fun()); */

    const renderTable = () => {
        populateTable();
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            {heading.map((head) =>
                                <th>{head}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {body.map((row) =>
                            <tr>
                                {row.map((val) => <td>{val}</td>)}
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
                    <input type="text" id="input1" className={styles.nombresInput} onChange={(e) => setInputNames([e.target.value, inputNames[1], inputNames[2], inputNames[3]])} /><button>+días</button></div>
                <div><label htmlFor="input2">2:</label>
                    <input type="text" id="input2" className={styles.nombresInput} onChange={(e) => setInputNames([inputNames[0], e.target.value, inputNames[2], inputNames[3]])} /><button>+días</button></div>
                <div><label htmlFor="input3">3:</label>
                    <input type="text" id="input3" className={styles.nombresInput} onChange={(e) => setInputNames([inputNames[0], inputNames[1], e.target.value, inputNames[3]])} /><button>+días</button></div>
                <div><label htmlFor="input4">4:</label>
                    <input type="text" id="input4" className={styles.nombresInput} onChange={(e) => setInputNames([inputNames[0], inputNames[1], inputNames[2], e.target.value])} /><button>+días</button></div>
            </div>

            <hr className={styles.hrDashed}></hr>

            <div className={styles.crearBtnContainer}><button onClick={() => HandleCreateBtn()}>Crear</button></div>

            {showTable ? renderTable() : <div></div>}


            {/* <table>
                <tbody>
                    <tr>
                        <th>Lunes</th>
                        <th>Martes</th>
                        <th>Miercoles</th>
                        <th>Jueves</th>
                        <th>Viernes</th>
                        <th>Sabado</th>
                        <th>Domingo</th>
                    </tr>
                    <tr>
                        <td>Alfreds Futterkiste</td>
                        <td>Maria Anders</td>
                        <td>Germany</td>
                        <td>Alfreds Futterkiste</td>
                        <td>Maria Anders</td>
                        <td>Germany</td>
                        <td>Germany</td>
                    </tr>
                    <tr>
                        <td>Centro comercial Moctezuma</td>
                        <td>Francisco Chang</td>
                        <td>Mexico</td>
                        <td>Alfreds Futterkiste</td>
                        <td>Maria Anders</td>
                        <td>Germany</td>
                        <td>Germany</td>
                    </tr>
                    <tr>
                        <td>Ernst Handel</td>
                        <td>Roland Mendel</td>
                        <td>Austria</td>
                        <td>Alfreds Futterkiste</td>
                        <td>Maria Anders</td>
                        <td>Germany</td>
                        <td>Germany</td>
                    </tr>
                    <tr>
                        <td>Island Trading</td>
                        <td>Helen Bennett</td>
                        <td>UK</td>
                        <td>Alfreds Futterkiste</td>
                        <td>Maria Anders</td>
                        <td>Germany</td>
                        <td>Germany</td>
                    </tr>
                    <tr>
                        <td>Laughing Bacchus Winecellars</td>
                        <td>Yoshi Tannamuri</td>
                        <td>Canada</td>
                        <td>Alfreds Futterkiste</td>
                        <td>Maria Anders</td>
                        <td>Germany</td>
                        <td>Germany</td>
                    </tr>
                    <tr>
                        <td>Magazzini Alimentari Riuniti</td>
                        <td>Giovanni Rovelli</td>
                        <td>Italy</td>
                        <td>Alfreds Futterkiste</td>
                        <td>Maria Anders</td>
                        <td>Germany</td>
                        <td>Germany</td>
                    </tr>
                </tbody>
            </table> */}


        </div>
    )
}

/* Considerando 2 personas x dia:
Habiendo 3 personas:
112233112233 (4x2)
Habiendo 4 personas:
12,12,34,34,12 (2x2)
*/