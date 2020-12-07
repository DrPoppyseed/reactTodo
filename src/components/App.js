import React, { useState, useEffect } from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'

import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'

import history from '../history'
import { signInWithToken } from '../actions'

import ItemList from './Item/ItemList/'
import SignIn from './Auth/SignIn/'
import SignUp from './Auth/SignUp'
import Header from './Header'

const useStyles = makeStyles({
	root: {
		alignItems: 'center',
		justifyContent: 'center'
	}
})

const autoSignOut = (milliseconds) => {
	setTimeout(() => {
		console.log('run logout action')
	}, milliseconds)
}

const checkAuthLoading = state => state.auth.loading
const checkItemsLoading = state => state.auth.loading
const checkIsSignedIn = state => state.auth.isSignedIn

const App = () => {
	const classes = useStyles()
	const dispatch = useDispatch
	const isAuthLoading = useSelector(checkAuthLoading)
	const isItemsLoading = useSelector(checkItemsLoading)
	const isSignedIn = useSelector(checkIsSignedIn)

	// useEffect(() => {
	// 	const token = localStorage.getItem('token')
	// 	const expiryDate = localStorage.getItem('expiryDate')
	// 	if (!token || !expiryDate) {
  //     return
  //   }
  //   if (new Date(expiryDate) <= new Date()) {
  //     console.log('run logout action')
  //     return;
  //   }
  //   const userId = localStorage.getItem('userId');
  //   const remainingMilliseconds =
	// 		new Date(expiryDate).getTime() - new Date().getTime();
	// 	dispatch(signInWithToken({userId: userId}))
	// 	autoSignOut(remainingMilliseconds)
	// }, [])

	useEffect(() => {
		if (!isSignedIn) {
			history.push('/auth/signin')
		}
	})

	return (
		<Container maxWidth='sm' className={classes.root}>
			<Router history={history}>
				<Header />
				<Switch>
					<Route path='/items' exact component={ItemList} />
					<Route path='/auth/signin' exact component={SignIn}/>
					<Route path='/auth/signup' exact component={SignUp}/>
				</Switch>
			</Router>
		</Container>
	)
}

export default App