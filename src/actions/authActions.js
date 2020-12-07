import {
	SIGN_IN_GOOGLE,
	SIGN_IN_EMAIL,
	SIGN_OUT,
	SIGN_UP_WITH_EMAIL,
	SIGN_IN_WITH_EMAIL,
	SIGN_IN_WITH_TOKEN,
	AUTH_LOADING,
	AUTH_FAILURE
} from './types'
import history from '../history'
import axios from 'axios'

const signInGoogle = () => {
	return {
		type: SIGN_IN_GOOGLE,
		payload: userId
	}
}

const signInWithToken = data => dispatch => {
	dispatch({ type: SIGN_IN_WITH_TOKEN, payload: data })
}

const signInWithEmail = data => dispatch => {
	dispatch({ type: AUTH_LOADING })
	axios({
		url: 'http://localhost:8003/auth/signin',
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		data: {
			email: data.email,
			password: data.password
		}
	})
	.then(response => {
		console.log('from signInWithEmail actions: ')
		console.log(response)
		dispatch({ type: SIGN_IN_WITH_EMAIL, payload: response.data })
		history.push('/items')
	})
	.catch(err => {
		dispatch({ type: AUTH_FAILURE, payload: err })
		console.log(err)
	})
}

const signOut = () => {
	return {
		type: SIGN_OUT
	}
}

const signUpWithEmail = formValues => dispatch => {
	axios({
		url: 'http://localhost:8003/auth/signup',
		method: 'PUT',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json;charset=UTF-8'
		},
		data: {...formValues}
	})
	.then(response => {
		console.log(response)
		dispatch({ type: SIGN_UP_WITH_EMAIL, payload: response.data })
	})
	.catch(err => {
		console.log(err)
	})
}

export {
	signInGoogle,
	signInWithEmail,
	signUpWithEmail,
	signInWithToken,
	signOut
}