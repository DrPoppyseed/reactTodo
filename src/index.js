import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import {
	applyMiddleware,
	createStore,
	compose
} from 'redux'
import reduxThunk from 'redux-thunk'

import App from './components/App'
import reducers from './reducers'

const store = createStore(reducers, 
	composeEnhancers(applyMiddleware(reduxThunk)))

ReactDOM.render(<App />, document.querySelector('#root'))