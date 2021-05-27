import React,  {useContext} from 'react'
import CounterContext from '../context/counter/CounterContext'
import Button from 'react-bootstrap/Button';

const buttons = {
    margin: '10px'
}

const Actions = () => {

    const { counter, addCounter, removeCounter } = useContext(CounterContext)

    return (
        <div>
            <Button variant="danger" style={buttons} onClick={() => removeCounter(counter)}>
                - 1
            </Button>
            <Button variant="info" style={buttons} onClick={() => addCounter(counter)}>
                + 1
            </Button>
           
        </div>
    )
}

export default Actions;