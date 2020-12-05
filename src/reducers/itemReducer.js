import {
	CREATE_ITEM
} from '../actions/types'

const INITIAL_STATE = {}

export default ((state=INITIAL_STATE, action) => {
	switch(action.type) {
		case CREATE_ITEM:
			return { ...state, [action.payload]: action.payload }
		default: 
			return state
	}
})