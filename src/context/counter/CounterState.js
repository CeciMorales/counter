import React, { useReducer } from 'react';
import CounterReducer from './CounterReducer'
import CounterContext from './CounterContext'

// use reducer es alternativa a usestate
// use reducer definr que func ejecutar y que parametros usar

const CounterState = (props) => {
    // funciones que alteraran edo y lo definirán

    const initialState = {
        counter: 5
    }

    const [state, dispatch] = useReducer(CounterReducer, initialState);


    const getCounter = () => {
        // cuando los componentes quieran el counter
        // lo laman con esta función  
        dispatch({
            type: 'GET_COUNTER',
            payload:  initialState.counter
        })

    }
    
    const addCounter = (counter) => {
        if (counter === 10) {
            alert("You can't add more numbers");
        } else {
            dispatch({
                /**nota: que mandar en payload? */
                type: 'ADD_COUNTER',
                payload:  counter + 1
            })

        }
        

    }

    const removeCounter = (counter) => {
        if (counter === 0) {
            alert("You can't remove more numbers");

        } else {
            dispatch({
                type: 'REMOVE_COUNTER',
                payload:  counter - 1
            })
        }
       
    }
    return (
        <CounterContext.Provider 
            value={{
                counter: state.counter,
                // getCounter: getCounter -> equivalente -> solo getCounter
                getCounter, 
                addCounter,
                removeCounter
            }}
        >
            {props.children}
        </CounterContext.Provider>

    )
}

export default CounterState;