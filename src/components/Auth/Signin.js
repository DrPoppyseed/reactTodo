import React, {useState}  from 'react'
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
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import InputAdornment from '@material-ui/core/InputAdornment'
import IconButton from '@material-ui/core/IconButton'

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
	button: {
		marginTop: 40,
		width: '100%'
	},
	googleButton: {
		marginTop: 20,
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

const renderPasswordField = ({
	label,
	input,
	meta: {touched, invalid, error},
	...custom
	}) => {
		const [showPassword, setShowPassword] = useState(true)
		const handleClickShowPassword = () => {
		setShowPassword(prevShowPassword => !prevShowPassword)
	}

	return (
		<TextField
			type={showPassword ? 'text' : 'password'}
			label={label}
			error={touched && invalid}
			helperText={touched && error}
			InputProps={{
				endAdornment: (
					<InputAdornment position="end">
						<IconButton
							aria-label="Toggle password visibility"
							onClick={handleClickShowPassword}
							edge="end"
						>
							{showPassword ? <VisibilityOff /> : <Visibility />}
						</IconButton>
					</InputAdornment>
				),
			}}
			{...input}
			{...custom}
		/>
	)
}

const SignIn = (props) => {
	const classes = useStyles()

	const onGLoginSuccess = () => {
		console.log('nice!')
	}

	const onGLoginFailure = () => {
		console.log('damn!')
	}


	return (
		<Container maxWidth='sm' className={classes.container}>
			<Typography className={classes.pageTitle} variant='h6'>Sign In</Typography>

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
					<form className={classes.form}>
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
							name='current-password'
							label='password'
							className={classes.textfield}
							component={renderPasswordField}
							autoComplete='current-password'
							required
						/>
						<Button 
							className={classes.button} 
							variant="contained" 
							color="primary"
							disabled={false}
							type='submit'
						>
							Sign In
						</Button>
					</form>
					<div className={classes.linkContainer}>
						<Link component={RouterLink} to='/auth/signin' className={classes.link}>
							Forgot your password?
						</Link>
						<Link component={RouterLink} to='/auth/signup' className={classes.link}>
							Don't have an account?
						</Link>
					</div>
				</div>
			</Box>
		</Container>
	)
}

const validate = formValues => {
	const errors = {}
}

export default reduxForm({
	form: 'signinForm',
	validate
})(SignIn)