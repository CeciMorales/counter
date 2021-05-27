import React from 'react'
import CounterState from '../context/counter/CounterState'

import Actions from './Actions'
import Counter from './Counter'

import Card from 'react-bootstrap/Card';

const wrapper = {
    backgroundColor: 'plum',
    textAlign: 'center',
    height: '100vh'
}

const Wrapper = () => {

    return (
        <div style={wrapper} className="d-flex flex-row justify-content-center align-items-center">
            
            <CounterState> 
            <Card border="info" style={{ width: '18rem' }}>
                <Card.Header>counter app</Card.Header>
                <Card.Body>
                <Card.Title>

                    <Counter></Counter>

                </Card.Title>
                <Card.Text>
                    <Actions></Actions>
    
                </Card.Text>
                </Card.Body>
            </Card>

            </CounterState> 
           
        </div>
    )
}

export default Wrapper;