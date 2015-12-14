import riot from 'riot'
import configureStore from './store';
import root from './components/root.tag';
import counter from './components/counter.tag'
import todos from './components/todos.tag'
import filterLink from './components/filterLink.tag';

const initialState = window.__INITIAL_STATE__;
const store = configureStore(initialState);

function render() {
	
	riot.mount('*', {store: store});
}

window.onload = function() {
	render();
}
