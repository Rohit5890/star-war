import { combineReducers } from 'redux';

import { mainReducer } from './reducer-filter';

const rootReducer = combineReducers({
    filteredList: mainReducer
});


export default rootReducer;