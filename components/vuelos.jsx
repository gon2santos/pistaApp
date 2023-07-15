import { useGetFlightsQuery } from "../redux/apiSlices/apiSlices"
import styles from '../styles/vuelos.module.css';

export default function Vuelos() {

    const { data, error, isLoading } = useGetFlightsQuery()

    return (
        <div>
            <h3>Lista de Vuelos</h3>
            <div className={styles.vuelosContainer}>
                {error ? (<>Oh no, there was an error</>)
                    : isLoading ? (<>Loading...</>)
                        : data ? (<>{data.response.map(e => <p key={e.flight_iata}>Vuelo: {e.flight_iata} Destino: {e.arr_iata} Hora Salida:{e.dep_time_ts}</p>)}</>)
                            : null}
            </div>
        </div>
    )
}