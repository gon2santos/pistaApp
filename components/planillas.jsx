import styles from '../styles/planillas.module.css';

export default function Planillas() {
    return (
        <div>
            <h3>Creador de Planillas</h3>
            <p>Nombres: </p>
            <div className={styles.nombresContainer}>
                <div><label htmlFor="input1">1:</label>
                    <input type="text" id="input1" className={styles.nombresInput} /><button>+días</button></div>
                <div><label htmlFor="input2">2:</label>
                    <input type="text" id="input2" className={styles.nombresInput} /><button>+días</button></div>
                <div><label htmlFor="input3">3:</label>
                    <input type="text" id="input3" className={styles.nombresInput} /><button>+días</button></div>
                <div><label htmlFor="input4">4:</label>
                    <input type="text" id="input4" className={styles.nombresInput} /><button>+días</button></div>
            </div>

            <hr className={styles.hrDashed}></hr>

            <div className={styles.crearBtnContainer}><button>Crear</button></div>

            <table>
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
            </table>


        </div>
    )
}