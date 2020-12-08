import {
	FETCHING_ITEMS,
	FETCH_ITEMS,
	FETCH_ITEMS_ERROR,
	CREATING_ITEM,
	CREATE_ITEM,
	CREATE_ITEM_ERROR,
	FETCHING_ITEM_BY_ID,
	FETCH_ITEM_BY_ID,
	FETCH_ITEM_BY_ID_ERROR,
	UPDATING_ITEM_BY_ID,
	UPDATE_ITEM_BY_ID,
	UPDATE_ITEM_BY_ID_ERROR,
	DELETING_ITEM_BY_ID,
	DELETE_ITEM_BY_ID,
	DELETE_ITEM_BY_ID_ERROR,
	CLEAR_ITEMS
} from '../actions/types'
import _ from 'lodash'

const INITIAL_STATE = {
	items: [],
	loading: false,
	message: '',
	error: ''
}

export default ((state=INITIAL_STATE, action) => {
	switch(action.type) {
		case FETCH_ITEMS:
			return { ...state, items: [...state.items, ...action.payload.items], message: action.payload.message , loading: false }
		case FETCHING_ITEMS: 
			return { ...state, loading: true }
		case FETCH_ITEMS_ERROR: 
			return { ...state, loading: false, error: action.payload }
		case CREATING_ITEM: 
			return { ...state, loading: true }
		case CREATE_ITEM:
			return { ...state, items: [...state.items, action.payload.item], message: action.payload.message, loading: false }
		case CREATE_ITEM_ERROR: 
			return { ...state, loading: false, error: action.payload }
		case FETCHING_ITEM_BY_ID: 
			return { ...state, loading: true  }
		case FETCH_ITEM_BY_ID:
			return { ...state, loading: false  }
		case FETCH_ITEM_BY_ID_ERROR:
			return { ...state, loading: false, error: action.payload }
		case DELETING_ITEM_BY_ID:
			return { ...state, loading: true }
		case DELETE_ITEM_BY_ID: 
			return { 
				...state, 
				items: state.items.filter(item => item._id !== action.payload), 
				loading: false 
			}
		case DELETE_ITEM_BY_ID_ERROR:
			return { ...state, error: action.payload, loading: false }
		case UPDATING_ITEM_BY_ID:
			return { ...state, loading: true }
		case UPDATE_ITEM_BY_ID:
			return { 
				...state, 
				loading: false, 
				items: state.items.map(item => {
					if (item._id === action.payload._id) {
						return action.payload
					} else {
						return item
					}
				})
			}
		case UPDATE_ITEM_BY_ID_ERROR:
			return { ...state, error: action.payload, loading: false }
		case CLEAR_ITEMS: 
			return INITIAL_STATE
		default: 
			return state
	}
})