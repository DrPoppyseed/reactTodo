import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

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


const Header = props => {
	const classes = useStyles()

	return (
		<AppBar>
			<ToolBar className={classes.toolbar}>
				<Link to='/' className={classes.button}>
					<Button className={classes.link}>
						React Todo App
					</Button>
				</Link>
				<Link to='/auth/signin' className={classes.button}>
					<Button className={classes.link}>
						Sign in | Sign up
					</Button>
				</Link>
			</ToolBar>
		</AppBar>
	)
}

export default Header