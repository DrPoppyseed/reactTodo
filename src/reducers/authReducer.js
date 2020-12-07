import { 
	SIGN_UP_WITH_EMAIL,
	SIGN_IN_WITH_EMAIL,
	SIGN_IN_WITH_TOKEN,
	AUTH_LOADING,
	AUTH_FAILURE,
	AUTH_SUCCESS
} from "../actions/types"

const INITIAL_STATE = {
	isSignedIn: false,
	userId: null,
	items: [],
	loading: false,
	token: null,
	error: ''
}

export default ((state=INITIAL_STATE, {type, payload}) => {
	switch(type) {
		case SIGN_UP_WITH_EMAIL:
			return {...state, isSignedIn: true, userId: payload.userId, loading: false}
		case SIGN_IN_WITH_EMAIL: 
			return { ...state, isSignedIn: true, userId: payload.userId, loading: false }
		case SIGN_IN_WITH_TOKEN: 
			return { ...state, isSignedIn: true, userId: payload.userId, loading: false }
		case AUTH_LOADING:
			return { ...state, loading: true }
		case AUTH_FAILURE: 
			return { ...state, loading: false, error: payload }
		default:
			return state
	}
})