import React, {useState}  from 'react'
import { GoogleLogin } from 'react-google-login'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { Link as RouterLink } from 'react-router-dom'
import { signInWithEmail } from '../../../actions'

import useStyles from './styles'
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
import CircularProgress from '@material-ui/core/CircularProgress'



const SignIn = props => {
	const { register, handleSubmit, control  } = useForm()
	const [showPassword, setShowPassword] = useState(true)
	const [isLoading, setIsLoading] = useState(false)
	const dispatch = useDispatch()
	const classes = useStyles()

	const onGLoginSuccess = () => {
		console.log('nice!')
	}

	const onGLoginFailure = () => {
		console.log('damn!')
	}

	const handleClickShowPassword = () => 
		setShowPassword(prevShowPassword => !prevShowPassword)

	const onSubmit = data => {
		dispatch(signInWithEmail(data))
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
					<form 
						onSubmit={handleSubmit(onSubmit)}
						className={classes.form}
					>
						<TextField 
							name='email'
							label='email'
							type='text'
							inputRef={register}
							className={classes.textfield}
							autoComplete='username'
							variant='outlined'
							control={control} 
							defaultValue=''
							required
						/>
						<TextField
							type={showPassword ? 'text' : 'password'}
							variant="outlined"
							inputRef={register}
							name='password'
							label='password'
							className={classes.textfield}
							autoComplete='current-password'
							control={control} 
							required
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
						/>
						<Button 
							className={classes.button} 
							variant="contained" 
							color="primary"
							disabled={isLoading ? true : false}
							type='submit'
						>
							{isLoading ? <CircularProgress /> : 'Sign In'}
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

export default SignIn