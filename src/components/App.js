import React, { useState, useEffect } from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import axios from 'axios'

import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'

import history from '../history'

import ItemList from './Item/ItemList/'
import SignIn from './Auth/SignIn'
import SignUp from './Auth/SignUp'
import Header from './Header'

const useStyles = makeStyles({
	root: {
		alignItems: 'center',
		justifyContent: 'center'
	}
})

const App = () => {
	const classes = useStyles()

	return (
		<Container maxWidth='sm' className={classes.root}>
			<Router history={history}>
				<Header />
				<Switch>
					<Route path='/' exact component={ItemList} />
					<Route path='/auth/signin' exact component={SignIn}/>
					<Route path='/auth/signup' exact component={SignUp}/>
				</Switch>
			</Router>
		</Container>
	)
}

export default App