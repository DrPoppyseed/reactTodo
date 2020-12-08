import { useSelector } from 'react-redux'

import {
	FETCHING_ITEMS,
	FETCH_ITEMS,
	FETCH_ITEMS_ERROR,
	FETCHING_ITEM_BY_ID,
	FETCH_ITEM_BY_ID,
	FETCH_ITEM_BY_ID_ERROR,
	CREATING_ITEM,
	CREATE_ITEM,
	CREATE_ITEM_ERROR,
	UPDATING_ITEM_BY_ID,
	UPDATE_ITEM_BY_ID,
	UPDATE_ITEM_BY_ID_ERROR,
	DELETING_ITEM_BY_ID,
	DELETE_ITEM_BY_ID,
	DELETE_ITEM_BY_ID_ERROR,
	CLEAR_ITEMS
} from './types'
import history from '../history'
import axios from 'axios'

const token = null || localStorage.getItem('token')

const clearItems = () => {
	return { type: CLEAR_ITEMS }
}

const fetchItems = () => async (dispatch) => {
	if (!token) {
		console.log('No token found [:fetchItems]')
	}
	console.log('from itemActions/fetchItems')
	console.log(token)
	dispatch({ type: FETCHING_ITEMS })

	axios({
		url: 'http://localhost:8003/items',
		method: 'GET',
		headers: {
			'Authorization': `Bearer ${token}`,
			'Accept': 'application/json',
			'Content-Type': 'application/json;charset=UTF-8'
		}
	})
	.then(response => {
		console.log('from inside itemActions/fetchItems....')
		console.log(response)
		dispatch({ type: FETCH_ITEMS, payload: response.data })
	})
	.catch(err => {
		console.log(err)
		dispatch({ type: FETCH_ITEMS_ERROR, payload: err })
	})
}

const fetchItemById = () => dispatch => {
	dispatch({ type: FETCHING_ITEM_BY_ID })

	if (!token) {
		console.log('No token found [:fetchItemById]')
	}

	axios({
		url: 'http://localhost:8003/items/:itemId',
		method: 'GET',
		header: {
			'Authorization': `Bearer ${token}`,
			'Accept': 'application/json',
			'Content-Type': 'application/json;charset=UTF-8'
		}
	})
	.then(response => {
		dispatch({ type: FETCH_ITEM_BY_ID, payload: response.data })
	})
	.catch(err => {
		console.log(err)
		dispatch({ type: FETCH_ITEM_BY_ID_ERROR, payload: err })
	})
}

const createItem = formValues => (dispatch, getState) => {
	dispatch({ type: CREATING_ITEM })

	if (!token) {
		console.log('No token found [:fetchItems]')
	}

	axios({
		url: 'http://localhost:8003/items/item',
		method: 'POST',
		mode: 'cors',
		headers: {
			'Authorization': `Bearer ${token}`,
			'Accept': 'application/json',
			'Content-Type': 'application/json;charset=UTF-8'
		},
		data: {...formValues}
	})
	.then(response => {
		console.log(response)
		dispatch({ type: CREATE_ITEM, payload: response.data })
		history.push('/items')
	})
	.catch(err => {
		dispatch({ type: CREATE_ITEM_ERROR, payload: err })
		console.log(err)
	})
}

const updateItemById = ({itemId, title}) => dispatch => {
	dispatch({ type: UPDATING_ITEM_BY_ID })
	axios({
		url: 'http://localhost:8003/items/' + itemId,
		method: 'PATCH',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		data: { title: title }
	})
	.then(response => {
		dispatch({ type: UPDATE_ITEM_BY_ID, payload: response.data.item })
	})
	.catch(err => {
		console.log(err)
		dispatch({ type: UPDATE_ITEM_BY_ID_ERROR, payload: err })
	})
}

const deleteItemById = itemId => dispatch => {
	dispatch({ type: DELETING_ITEM_BY_ID })

	axios({
		url: 'http://localhost:8003/items/' + itemId,
		method: 'DELETE',
		headers: {
			// 'Authorization': `Bearer ${token},`
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		// data: { itemId: itemId }
	})
	.then(response => {
		console.log(response)
		dispatch({ type: DELETE_ITEM_BY_ID, payload: itemId })
		history.push('/items')
	})
	.catch(err => {
		console.log(err)
		dispatch({ type: DELETE_ITEM_BY_ID_ERROR, payload: err })
	})
}

export {
	fetchItems,
	fetchItemById,
	deleteItemById,
	updateItemById,
	createItem,
	clearItems
}