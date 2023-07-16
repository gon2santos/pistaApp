import { useGetFlightsQuery } from "../redux/apiSlices/apiSlices"
import styles from '../styles/vuelos.module.css';

export default function Vuelos() {

    const { data, error, isLoading } = useGetFlightsQuery()
    let heading = ["Linea", "Vuelo", "Destino", "Salida"]
    var logoDict = {
        AR: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Aerol%C3%ADneas_Argentinas_Logo_2010.svg/320px-Aerol%C3%ADneas_Argentinas_Logo_2010.svg.png",
        G3: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/GOL_logo.svg/150px-GOL_logo.svg.png",
        AZ: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Alitalia_Logo_2017%E2%80%932021.svg/320px-Alitalia_Logo_2017%E2%80%932021.svg.png",
        AM: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Aerom%C3%A9xico_logo.svg/262px-Aerom%C3%A9xico_logo.svg.png",
        LA: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Latam-logo_-v_%28Indigo%29.svg/220px-Latam-logo_-v_%28Indigo%29.svg.png",
        LP: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Latam-logo_-v_%28Indigo%29.svg/220px-Latam-logo_-v_%28Indigo%29.svg.png",
        JJ: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Latam-logo_-v_%28Indigo%29.svg/220px-Latam-logo_-v_%28Indigo%29.svg.png",
        ZP: "https://www.paranair.com/wp-content/uploads/2021/09/logo.svg",
        FO: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/FlybondiLOGO2020.png/320px-FlybondiLOGO2020.png",
        WJ: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Logo_JetSmart.svg/250px-Logo_JetSmart.svg.png",
        H2: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Sky_Airline_Logo.svg/320px-Sky_Airline_Logo.svg.png",
        KL: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/KLM_logo.svg/150px-KLM_logo.svg.png",
        UX: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Air_Europa_Logo_%282015%29.svg/320px-Air_Europa_Logo_%282015%29.svg.png",
        DL: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Delta_Airlines_Logo_Skyteam.svg/280px-Delta_Airlines_Logo_Skyteam.svg.png",
        LX: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Swiss_International_Air_Lines_Logo_2011.svg/200px-Swiss_International_Air_Lines_Logo_2011.svg.png",
        AF: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Air_France_Logo.svg/300px-Air_France_Logo.svg.png"
    }

    const convertDate = (unixtime) => {
        var newDate = new Date();
        newDate.setTime(unixtime * 1000);
        return (`${newDate.toTimeString().split(" ")[0]}`)
    }

    return (
        <div>
            <h3>Lista de Vuelos</h3>

            <div className={styles.radioButtonContainer}>
                <span>Filtrar Turno:</span>
                <div className={styles.radioButton}><input type="radio" id="Mañana" value="Mañana" />
                    <label for="Mañana">Mañana</label></div><br />
                <div className={styles.radioButton}><input type="radio" id="Tarde" value="Tarde" />
                    <label for="Tarde">Tarde</label></div><br />
                <div className={styles.radioButton}><input type="radio" id="Noche" value="Noche" />
                    <label for="Noche">Noche</label></div>
            </div>
            <div>
                <input type="checkbox" id="scales" name="scales" checked />
                <label for="scales">Ver solo Aerolineas Argentinas</label>
            </div>


            <div className={styles.vuelosContainer}>
                {error ? (<>Oh no, there was an error</>)
                    : isLoading ? (<>Loading...</>)
                        : data ?
                            (
                                <table>
                                    <thead>
                                        <tr>
                                            {heading.map((head) =>
                                                <th key={head}>{head}</th>)}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* {(resultData.carousel) ? (resultData.carousel === '-') ? <tr><td>Sin resultados</td></tr> : (<tr key={resultData.id}><td key={resultData.id + 'a'}>{resultData.airportCode}</td><td key={resultData.id + 'b'}>{resultData.flightCode}</td><td key={resultData.id + 'c'}>{resultData.carousel}</td></tr>) : */}
                                        {(data/* .response */.map(e => {
                                            return (<tr key={e.flight_iata}>
                                                <td key={e.flight_iata + 'a'}> <img src={logoDict[e.airline_iata]} alt="logo" width="50" height="auto" /> </td>
                                                <td key={e.flight_iata + 'b'}>{e.flight_iata}</td>
                                                <td key={e.flight_iata + 'c'}>{e.arr_iata}</td>
                                                <td key={e.flight_iata + 'd'}>{convertDate(e.dep_time_ts)}</td>
                                            </tr>)
                                        }))}
                                    </tbody>
                                </table>
                            )
                            /* (<>{data.response.map(e => <p key={e.flight_iata}>Vuelo: {e.flight_iata} Destino: {e.arr_iata} Hora Salida:{e.dep_time_ts}</p>)}</>) */
                            : null}
            </div>
        </div>
    )
}