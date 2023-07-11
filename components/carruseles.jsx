import styles from '../styles/carruseles.module.css';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../redux/slices/counterSlice'

export default function Carruseles() {

    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <div>
            <h3>Buscador de Carruseles</h3>
            <div>
                <input></input>
                <button>Search</button>
            </div>
            <div className={styles.resultsContainer}></div>
        </div>
    )
}