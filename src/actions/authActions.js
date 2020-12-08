import {
  SIGN_IN_GOOGLE,
  SIGN_IN_EMAIL,
  SIGN_OUT,
  SIGN_UP_WITH_EMAIL,
  SIGN_IN_WITH_EMAIL,
  SIGN_IN_WITH_TOKEN,
  AUTH_LOADING,
  AUTH_FAILURE,
} from './types'
import history from '../history'
import axios from 'axios'

const signInGoogle = userId => {
  return {
    type: SIGN_IN_GOOGLE,
    payload: userId,
  }
}

const signInWithToken = data => dispatch => {
  dispatch({ type: AUTH_LOADING })
  axios({
    url: 'http://localhost:8003/auth/tokensignin',
    method: 'POST',
    headers: {
      Authorization: `Bearer ${data.token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: { userId: data.userId },
  })
    .then(response => {
      dispatch({ type: SIGN_IN_WITH_TOKEN, payload: response.data })
      localStorage.setItem('token', response.data.token.toString())
      localStorage.setItem('userId', response.data.userId)
      const remainingMilliseconds = 60 * 60 * 1000
      const expiryDate = new Date(new Date().getTime() + remainingMilliseconds)
      localStorage.setItem('expiryDate', expiryDate.toISOString())
      history.push('/items')
    })
    .catch(err => {
      dispatch({ type: AUTH_FAILURE, payload: err })
    })
}

const signInWithEmail = data => dispatch => {
  dispatch({ type: AUTH_LOADING })
  axios({
    url: 'http://localhost:8003/auth/signin',
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
    },
    data: {
      email: data.email,
      password: data.password,
    },
  })
    .then(response => {
      console.log(response)
      dispatch({ type: SIGN_IN_WITH_EMAIL, payload: response.data })
      localStorage.setItem('token', response.data.token.toString())
      localStorage.setItem('userId', response.data.userId)
      const remainingMilliseconds = 60 * 60 * 1000
      const expiryDate = new Date(new Date().getTime() + remainingMilliseconds)
      localStorage.setItem('expiryDate', expiryDate.toISOString())
      history.push('/items')
    })
    .catch(err => {
      dispatch({ type: AUTH_FAILURE, payload: err })
      console.log(err)
    })
}

const signOut = () => {
  localStorage.removeItem('token')
  localStorage.removeItem('expiryDate')
  localStorage.removeItem('userId')
  return {
    type: SIGN_OUT,
  }
}

const signUpWithEmail = formValues => dispatch => {
  axios({
    url: 'http://localhost:8003/auth/signup',
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
    },
    data: { ...formValues },
  })
    .then(response => {
      console.log(response)
      dispatch({ type: SIGN_UP_WITH_EMAIL, payload: response.data })
      history.push('/items')
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
  signOut,
}
