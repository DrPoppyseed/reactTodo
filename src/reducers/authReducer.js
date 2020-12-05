import { 
	SIGN_UP_WITH_EMAIL 
} from "../actions/types"

const INITIAL_STATE = {
	// title = ''
}

export default ((state=INITIAL_STATE, action) => {
	switch(action.type) {
		case SIGN_UP_WITH_EMAIL:
			return {...state}
		default:
			return {state}
	}
})