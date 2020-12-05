import {
	SIGN_IN_GOOGLE,
	SIGN_IN_EMAIL,
	SIGN_OUT,
	SIGN_UP_WITH_EMAIL
} from './types'
import history from '../history'
import axios from 'axios'

const signInGoogle = () => {
	return {
		type: SIGN_IN_GOOGLE,
		payload: userId
	}
}

const signInEmail = () => {
	return {
		type: SIGN_IN_EMAIL,
		payload: useId
	}
}

const signOut = () => {
	return {
		type: SIGN_OUT
	}
}

const signUpWithEmail = formValues => async dispatch => {
	// const response = await 

	// api('/signup', {...formValues})
	// 	.then(response => {
	// 		dispatch({ type: SIGN_UP_WITH_EMAIL, payload: response.data })
	// 	})
	// 	.catch(err => {
	// 		console.log(err)
	// 	})
}

export {
	signInGoogle,
	signInEmail,
	signUpWithEmail,
	signOut
}