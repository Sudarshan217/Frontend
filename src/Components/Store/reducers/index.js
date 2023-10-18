// export many reducers to store and combine in the form of combineReducers

import {combineReducers} from 'redux';
import amountReducer from '../reducers/amountReducers';

const reducers = combineReducers({
    token:amountReducer,
})

export default reducers
