import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers/index'


export default function configureStore(initialState) {
	const createStoreWithMiddleware = compose(
		applyMiddleware(thunk),
		window.devToolsExtension ? window.devToolsExtension() : f => f
	)(createStore)
	
	const store = createStoreWithMiddleware(reducer, initialState);

	return store;
}

