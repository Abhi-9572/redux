import {createStore,combineReducers} from 'redux' 
import { shirtReducer } from './shirt/shirtReducer'

const combinedReducer=combineReducers({
    shirt : shirtReducer,
    // jean: jeanReducer
})

export const store=createStore(combinedReducer)



