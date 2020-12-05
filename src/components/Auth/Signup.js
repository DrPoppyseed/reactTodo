import React, { useState, useEffect }  from 'react'
import { GoogleLogin } from 'react-google-login'
import { Field, reduxForm } from 'redux-form'
import { Link as RouterLink } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Box from '@material-ui/core/Box'
import Link from '@material-ui/core/Link'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'

import { signInGoogle, signInEmail } from '../../actions'

const useStyles = makeStyles({
	container: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	pageTitle:{
		marginTop: 150,
	},
	box: {
		marginTop: 20,
		width: 350
	},
	form: {
		marginTop: 20,
	},
	textfield: {
		marginTop: 10,
		width: '100%'
	},
	googleButton: {
		marginTop: 20,
		width: '100%'
	},
	button: {
		height: 50,
		marginTop: 40,
		width: '100%'
	},
	linkContainer: {
		marginTop: 40,
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	link: {
		textDecoration: 'none'
	}
})

const renderTextField = ({
	label,
	input,
	meta: {touched, invalid, error},
	...custom
}) => (
	<TextField
		label={label}
		error={touched && invalid}
		helperText={touched && error}
		{...input}
		{...custom}
	/>
)

const SignUp = props => {
	const classes = useStyles()
	const [loading, setLoading] = useState(false)

	// useEffect(() => {
	// 	if (loading) return <CircularProgress />
	// }, [loading])

	const onGLoginSuccess = () => {
		console.log('nice!')
	}

	const onGLoginFailure = () => {
		console.log('damn!')
	}

	const handleClickSubmit = () => {
		setLoading(true)
		
	}	

	return (
		<Container maxWidth='sm' className={classes.container}>
			<Typography className={classes.pageTitle} variant='h6'>Sign Up</Typography>
			<Box className={classes.box}>
				<div>
					<GoogleLogin
						clientId="774362943221-5jbo5hupldlijbt777jmlgcs0nmtohsu.apps.googleusercontent.com"
						buttonText="Login"
						onSuccess={onGLoginSuccess}
						onFailure={onGLoginFailure}
						cookiePolicy={'single_host_origin'}
						className={classes.googleButton}
					/>
					<form className={classes.form} onSubmit={() => console.log('submitted!')}>
						<Field 
							name='email'
							label='email'
							type='text'
							className={classes.textfield}
							component={renderTextField}
							autoComplete='username'
							variant='outlined'
							required
						/>
						<Field
							variant="outlined"
							name='new-password'
							label='password'
							type='password'
							className={classes.textfield}
							component={renderTextField}
							autoComplete='new-password'
							required
						/>
						<Field 
							variant='outlined'
							name='new-password'
							type='password'
							label='confirm your password'
							className={classes.textfield}
							component={renderTextField}
							autoComplete='new-password'
							required
						/>
						<Button 
							className={classes.button} 
							variant="contained" 
							color="primary" 
							onClick={handleClickSubmit}
							type="submit"
							disabled={loading ? true : false}
						>
							{loading ? <CircularProgress /> : 'Sign Up'}
						</Button>
						<div className={classes.linkContainer}>
							<Link component={RouterLink} to='/auth/signin' className={classes.link}>
								Already have an account?
							</Link>
						</div>
					</form>
				</div>
			</Box>
		</Container>
	)
}

const validate = formValues => {
	const errors = {}
}

// const mapStateToProps = (state) => {
// 	return {  }
// }

reduxSignUp = connect(
	null, 
	{ signInGoogle, signInEmail }
)(SignUp)

export default reduxForm({
	form: 'signupForm',
	validate
})(SignUp)