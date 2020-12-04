import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import {
	applyMiddleware,
	createStore,
	compose
} from 'redux'
import reduxThunk from 'redux-thunk'
import CssBaseline from '@material-ui/core/CssBaseline'

import App from './components/App'
import reducers from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, 
	composeEnhancers(applyMiddleware(reduxThunk)))

ReactDOM.render(
	<Provider store={store}>
		<CssBaseline />
		<App />
	</Provider>,
	document.querySelector('#root'))