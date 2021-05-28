import { combineReducers, applyMiddleware} from 'redux';
import counter from './counter';


const rootReducer = combineReducers({
    counter
})


export default rootReducer