import React, { useContext} from 'react'
import CounterContext from '../context/counter/CounterContext'
// Aapenas carga, se ejecuta el useEffect

const Counter = () => {

    // especificar a que contexto queremeos que acceda
    const { counter } = useContext(CounterContext)

    return (
        <div>
            <h1>{counter}</h1>
        </div>
    )
}

export default Counter;