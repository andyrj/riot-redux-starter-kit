import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';
import visibility from './visibility';

export default combineReducers({
	counter,
	todos,
	visibility
})
