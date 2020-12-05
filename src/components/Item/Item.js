import React, { Fragment, useState } from 'react'
import { Field, reduxForm } from 'redux-form'

import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'
import TextField from '@material-ui/core/TextField'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline'
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton'
import Card from '@material-ui/core/Card'

const useStyles = makeStyles({
	root: {
		width: 350,
		padding: 6,
		paddingLeft: 18,
		paddingRight: 12,
	},
	cardContent: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	dialog: {
		width: 350
	},
	cardText: {

	},
	iconButtons: {
	},
	iconButton: {
		// float: 'right',
		// display: 'inline-block'
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

const Item = ({title}) => {
	const classes = useStyles()
	const [open, setOpen] = useState(false);

	const handleClose = () => {
		setOpen(false)
	}

	const handleClickOpen = () => {
		setOpen(true)
	}

  const handleCancelClick = () => {
    setOpen(true);
  }

  const handleSubmitClick = () => {
    setOpen(false);
	}

	const handleDeleteClick = () => {
		console.log('delete')
	}

	return (
		<Card className={classes.root}>
			<div className={classes.cardContent}>
				<Typography className={classes.cardContent}>
					{title}
				</Typography>
				<div className={classes.iconButtons}>
					<IconButton 
						className={classes.iconButton}
						onClick={handleClickOpen}
					>
						<EditIcon />
					</IconButton>
					<IconButton 
						className={classes.iconButton}
						onClick={handleDeleteClick}
					>
						<DeleteOutlineIcon />
					</IconButton>
				</div>
			</div>
			<Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Edit"}</DialogTitle>
        <DialogContent className={classes.dialog}>				
					<form style={{width: '100%'}}>
						<Field
							style={{width: '100%'}}
							name='title'
							label='Title'
							type='text'
							className={classes.textfield}
							component={renderTextField}
							variant='outlined'
							required
						/>
						</form>	
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmitClick} color="primary" autoFocus>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
		</Card>
	)
}

const validate = formValues => {
	const errors = {}
}

export default reduxForm({
	form: 'itemForm',
	validate
})(Item)