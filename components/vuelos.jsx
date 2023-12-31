import { useEffect, useRef, useState } from "react";
import { useGetFlightsQuery } from "../redux/apiSlices/apiSlices"
import styles from '../styles/vuelos.module.css';

export default function Vuelos() {

    const { data, error, isLoading } = useGetFlightsQuery()
    useEffect(() => {
        error ? {}
            : isLoading ? {}
                : data ?
                    onChangeValue({ target: { value: "m" } })
                    : {};
    }, [data]);
    const [filteredData, setFilteredData] = useState(data ? data : null);
    const [checkBoxState, setCheckBoxState] = useState(true);
    let heading = ["Linea", "Vuelo", "Destino", "Salida"]
    const [currentTurno, setCurrentTurno] = useState("null");
    var checkBoxRef = useRef(null);
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

    const onChangeValue = function (e) {
        if (!checkBoxState)
            checkBoxRef.current.checked = false;
        switch (e.target.value) {
            case "m": //entre 7 y 15 (1689530400)
                setCurrentTurno("m");
                setFilteredData(data.filter((f) => { if ((f.timeHr >= 7) && (f.timeHr < 15)) return f }));
                break;
            case "t": //entre 15 (1689530400) y 23 
                setCurrentTurno("t");
                setFilteredData(data.filter((f) => { if ((f.timeHr >= 15) && (f.timeHr < 23)) return f }));
                break;
            case "n": //entre 23 y 7
                setCurrentTurno("n");
                const d = new Date();
                let hourNow = d.getHours();
                if ((hourNow >= 0) && (hourNow < 7))
                    setFilteredData(data.filter((f) => { if ((f.timeHr >= 0) && (f.timeHr <= 7)) return f }));
                else if ((hourNow >= 22))
                    setFilteredData(data.filter((f) => { if (f.timeHr >= 22) return f }));
                else
                    setFilteredData(data.filter((f) => { if (f.timeHr >= 22) return f }));
                break;
            default:
                setCurrentTurno("null");
                setFilteredData(data);
                break;
        }
    }

    const onChangeCheckbox = function (e) {
        setCheckBoxState(!checkBoxState);
        switch (checkBoxState) {
            case true:
                (filteredData === null) ? setFilteredData(data.filter((f) => { if (f.airline_iata === "AR") return f })) :
                    setFilteredData(filteredData.filter((f) => { if (f.airline_iata === "AR") return f }));
                break;
            case false:
                onChangeValue({ target: { value: currentTurno } });
                break;
        }
    }

    return (
        <div>
            <h3>Lista de Vuelos</h3>

            <div className={styles.radioButtonContainer} onChange={onChangeValue}>
                <span>Filtrar Turno:</span>
                <div className={styles.radioButton}><input type="radio" name="turnoRad" id="Mañana" value="m" defaultChecked="true" />
                    <label htmlFor="Mañana">Mañana</label></div><br />
                <div className={styles.radioButton}><input type="radio" name="turnoRad" id="Tarde" value="t" />
                    <label htmlFor="Tarde">Tarde</label></div><br />
                <div className={styles.radioButton}><input type="radio" name="turnoRad" id="Noche" value="n" />
                    <label htmlFor="Noche">Noche</label></div>
            </div>
            <div>
                <input type="checkbox" id="scales" name="scales" onChange={onChangeCheckbox} ref={checkBoxRef} />
                <label htmlFor="scales">Ver solo Aerolineas Argentinas</label>
            </div>


            <div className={styles.vuelosContainer}>
                {error ? (<>Oh no, there was an error</>)
                    : isLoading ? (<>Loading...</>)
                        : data ? filteredData ?
                            (
                                <table>
                                    <thead>
                                        <tr>
                                            {heading.map((head) =>
                                                <th key={head + "b"}>{head}</th>)}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {(filteredData.map(e => {
                                            return (<tr key={e.flight_iata + "x"}>
                                                <td key={e.flight_iata + 'a'}> <img src={logoDict[e.airline_iata]} alt="logo" width="50" height="auto" /> </td>
                                                <td key={e.flight_iata + 'b'}>{e.flight_iata}</td>
                                                <td key={e.flight_iata + 'c'}>{e.arr_iata}</td>
                                                <td key={e.flight_iata + 'd'}>{convertDate(e.dep_time_ts)}</td>
                                            </tr>)
                                        }))}
                                    </tbody>
                                </table>
                            )
                            :
                            (
                                <table>
                                    <thead>
                                        <tr>
                                            {heading.map((head) =>
                                                <th key={head + "a"}>{head}</th>)}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {(data.map(e => {
                                            return (<tr key={e.dep_time_ts + e.flight_iata}>
                                                <td key={e.flight_iata + 'a'}> <img src={logoDict[e.airline_iata]} alt="logo" width="50" height="auto" /> </td>
                                                <td key={e.flight_iata + 'b'}>{e.flight_iata}</td>
                                                <td key={e.flight_iata + 'c'}>{e.arr_iata}</td>
                                                <td key={e.flight_iata + 'd'}>{convertDate(e.dep_time_ts)}</td>
                                            </tr>)
                                        }))}
                                    </tbody>
                                </table>
                            )
                            : null}
            </div>
        </div>
    )
}