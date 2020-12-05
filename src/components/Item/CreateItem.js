import React, { Fragment, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { createItem } from '../../actions'
import { connect } from 'react-redux'

import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import IconButton from '@material-ui/core/IconButton'
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles({
	root: {
		width: 350,
		padding: 6,
		paddingLeft: 18,
		paddingRight: 12,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	field: {
		width: 250
	}
})

const CreateItem = props => {
	const { register, handleSubmit, control  } = useForm()
	const classes = useStyles()

	const onSubmit = data => {
		props.createItem(data)
	}

	return (
		<div className={classes.root}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Controller 
					as={TextField} 
					// ref={register}
					variant='outlined'
					className={classes.field}
					label='Todo...'
					name="title" 
					control={control} 
					defaultValue="" 
				/>
				<IconButton type='submit'>
					<SendIcon />
				</IconButton>
			</form>
		</div>
	)
}

export default connect(
	null, { createItem }
)(CreateItem)