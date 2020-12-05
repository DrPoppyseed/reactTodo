import {
	SIGN_IN_GOOGLE,
	SIGN_IN_EMAIL,
	SIGN_OUT
} from './types'

export const signInGoogle = () => {
	return {
		type: SIGN_IN_GOOGLE,
		payload: userId
	}
}

export const signInEmail = () => {
	return {
		type: SIGN_IN_EMAIL,
		payload: useId
	}
}

export const signOut = () => {
	return {
		type: SIGN_OUT
	}
}