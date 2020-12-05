import {
	FETCH_ITEMS,
	FETCH_ITEM,
	CREATE_ITEM,
	UPDATE_ITEM,
	DELETE_ITEM,
} from './types'
import history from '../history'
import axios from 'axios'

const fetchItems = () => async dispatch => {
	axios({
		url: 'http://localhost:8003/',
		method: 'GET',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json;charset=UTF-8'
		}
	})
	.then(response => {
		console.log(response)
		dispatch({ type: FETCH_ITEMS, payload: response.data })
	})
	.catch(err => {
		console.log(err)
	})
}

const fetchItem = () => {
	return {
		type: FETCH_ITEM
	}
}

const createItem = formValues => (dispatch, getState) => {
	axios({
		url: 'http://localhost:8003/item',
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json;charset=UTF-8'
		},
		data: {...formValues}
	})
	.then(response => {
		console.log(response)
		dispatch({ type: CREATE_ITEM, payload: response.data })
		history.push('/')
	})
	.catch(err => {
		setIsLoading(false)
		console.log(err)
	})
}

const updateItem = () => {
	return {
		type: UPDATE_ITEM
	}
}

const deleteItem = () => {
	return {
		type: DELETE_ITEM
	}
}

export {
	fetchItems,
	fetchItem,
	createItem,
	updateItem,
	deleteItem
}