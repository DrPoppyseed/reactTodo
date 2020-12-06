import { 
	SIGN_UP_WITH_EMAIL 
} from "../actions/types"

const INITIAL_STATE = {
	isSignedIn: false,
	userId: null
}

export default ((state=INITIAL_STATE, action) => {
	switch(action.type) {
		case SIGN_UP_WITH_EMAIL:
			return {...state, isSignedIn: true, userId: action.payload.userId}
		default:
			return {state}
	}
})