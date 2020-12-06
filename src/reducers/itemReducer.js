import {
	FETCHING_ITEMS,
	FETCH_ITEMS,
	FETCH_ITEMS_ERROR,
	CREATE_ITEM
} from '../actions/types'

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
		case CREATE_ITEM:
			return { ...state, [action.payload]: action.payload }
		default: 
			return state
	}
})