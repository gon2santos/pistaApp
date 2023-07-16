import styles from '../styles/carruseles.module.css';
import { useSelector, useDispatch } from 'react-redux'
//import { decrement, increment } from '../redux/slices/counterSlice'
import { useGetPistaByNameQuery } from '../redux/apiSlices/apiSlices';
import { useState } from 'react';

export default function Carruseles() {

    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    const { data, error, isLoading } = useGetPistaByNameQuery()
    let heading = ["Destino", "Codigo", "Carrusel"]
    const [inputData, setInputData] = useState("");
    const [resultData, setResultData] = useState({});

    const handleSearch = function (term) {
        if (term == "") {
            setResultData({});
        }
        else if (isNaN(term))//si term es un string
        {
            try {
                data.forEach(element => {
                    if (element.airportCode === term.toUpperCase()) {
                        setResultData({ airportCode: element.airportCode, flightCode: element.flightCode, carousel: element.carousel })
                        throw BreakError;
                    }
                    setResultData({ airportCode: "-", flightCode: "-", carousel: "-", id: 0 });
                });
            }
            catch (err) { }
        }
        else //si term es un numero
        {
            try {
                data.forEach(element => {
                    if (element.flightCode === term) {
                        setResultData({ airportCode: element.airportCode, flightCode: element.flightCode, carousel: element.carousel })
                        throw BreakError;
                    }
                    setResultData({ airportCode: "-", flightCode: "-", carousel: "-", id: 0 });
                });
            }
            catch (err) { }
        }
    };

    return (
        <div>
            {/* <h2>{count}</h2>
            <button onClick={() => dispatch(increment())}>Incrementar valor</button>
            <button onClick={() => dispatch(decrement())}>Decrementar valor</button> */}
            <h3>Buscador de Carruseles</h3>
            <div className={styles.searchBar}>
                <input className={styles.searchInput} placeholder={`"VVI" , "1500" , "SLA" ...`} onChange={(e) => setInputData(e.target.value)}></input>
                <button className={styles.searchBtn} onClick={() => handleSearch(inputData)}>🔍</button>
            </div>
            <div className={styles.carruselesContainer}>
                {error ? (
                    <>Oh no, there was an error</>
                ) : isLoading ? (
                    <div>
                        <table>
                            <thead>
                                <tr>
                                    {heading.map((head) =>
                                        <th key={head}>{head}</th>)}
                                </tr>
                            </thead>
                        </table>
                        <>Loading...</>
                    </div>
                ) : data ? (
                    <table>
                        <thead>
                            <tr>
                                {heading.map((head) =>
                                    <th key={head}>{head}</th>)}
                            </tr>
                        </thead>
                        <tbody>
                            {(resultData.carousel) ? (resultData.carousel === '-') ? <tr><td>Sin resultados</td></tr> : (<tr key={resultData.id}><td key={resultData.id + 'a'}>{resultData.airportCode}</td><td key={resultData.id + 'b'}>{resultData.flightCode}</td><td key={resultData.id + 'c'}>{resultData.carousel}</td></tr>) :
                                (data.map(e => {
                                    return (<tr key={e.id}><td key={e.id + 'a'}>{e.airportCode}</td><td key={e.id + 'b'}>{e.flightCode}</td><td key={e.id + 'c'}>{e.carousel}</td></tr>)
                                }))}
                        </tbody>
                    </table>
                ) : null}
            </div>
        </div>
    )
}