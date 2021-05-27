// que es lo que quremos que haga lo de types
import { GET_COUNTER, ADD_COUNTER, REMOVE_COUNTER} from '../types'

// que datos nos estan pasando, estado y lo que queremos hacer
export default  (state, action) => {
    const {payload, type} = action

    switch(type) {
        case GET_COUNTER:
            return {
                ...state,
                counter: payload
            }
        case ADD_COUNTER:
            return {
                ...state,
                counter: payload
            }
        case REMOVE_COUNTER:
            return {
                ...state,
                counter: payload
            }
        default:
            return state
    }
}
