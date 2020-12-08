import React, { useState, useEffect } from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'

import history from '../history'
import { signInWithToken, signOut } from '../actions'

import ItemList from './Item/ItemList/'
import SignIn from './Auth/SignIn/'
import SignUp from './Auth/SignUp/'
import Header from './Header'

const useStyles = makeStyles({
  root: {
    alignItems: 'center',
    justifyContent: 'center',
  },
})

const autoSignOut = milliseconds => {
  setTimeout(() => {
    dispatch(signOut())
  }, milliseconds)
}

const checkAuthLoading = state => state.auth.loading
const checkItemsLoading = state => state.auth.loading
const checkIsSignedIn = state => state.auth.isSignedIn
const getToken = state => state.auth.token

const App = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const isAuthLoading = useSelector(checkAuthLoading)
  const isItemsLoading = useSelector(checkItemsLoading)
  const isSignedIn = useSelector(checkIsSignedIn)
  const token = useSelector(getToken)

  useEffect(() => {
    const token = localStorage.getItem('token')
    const expiryDate = localStorage.getItem('expiryDate')
    if (!token || !expiryDate) {
      return
    }
    if (new Date(expiryDate) <= new Date()) {
      dispatch(signOut())
      return
    }
    const userId = localStorage.getItem('userId')
    const remainingMilliseconds =
      new Date(expiryDate).getTime() - new Date().getTime()
    // dispatch(signInWithToken({token: token, userId: userId}))
    autoSignOut(remainingMilliseconds)
  }, [])

  useEffect(() => {
    if (!isSignedIn) {
      history.push('/auth/signin')
    }
  })

  return (
    <Container maxWidth="sm" className={classes.root}>
      <Router history={history}>
        <Header />
        <Switch>
          <Route path="/items" exact component={ItemList} />
          <Route path="/auth/signin" exact component={SignIn} />
          <Route path="/auth/signup" exact component={SignUp} />
        </Switch>
      </Router>
    </Container>
  )
}

export default App
