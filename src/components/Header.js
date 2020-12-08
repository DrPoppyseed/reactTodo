import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { signOut } from '../actions'

import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/ToolBar'

const useStyles = makeStyles({
	button: {
		textDecoration: 'none'
	},
	link: {
		color: 'white'
	},
	toolbar: {
		justifyContent: 'space-between'
	}
}) 

const checkIsSignedIn = state => state.auth.isSignedIn

const Header = () => {
	const classes = useStyles()
	const dispatch = useDispatch()
	const isSignedIn = useSelector(checkIsSignedIn)

	const renderAuthButton = () => {
		if (!isSignedIn)
			return (
				<Link to='/auth/signin' className={classes.button}>
					<Button className={classes.link}>
						Sign in | Sign up
					</Button>
				</Link>
			)
		else 
			return (
				<Button className={classes.link} onClick={() => dispatch(signOut())}>
					Sign out
				</Button>
			)
	}

	return (
		<AppBar>
			<ToolBar className={classes.toolbar}>
				<Link to='/items' className={classes.button}>
					<Button className={classes.link}>
						React Todo App
					</Button>
				</Link>
				{renderAuthButton()}
			</ToolBar>
		</AppBar>
	)
}

export default Header