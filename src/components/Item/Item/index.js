import React, { Fragment, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { deleteItemById, updateItemById } from '../../../actions'

import useStyles from './styles'
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

const getCurrentItem = state => state.items

const Item = ({title, itemId}) => {
	const { register, handleSubmit, control  } = useForm()
	const currentItem = {} || useSelector(getCurrentItem)
	const dispatch = useDispatch()
	const classes = useStyles()
	const [open, setOpen] = useState(false);

	const handleClose = () => {
		setOpen(false)
	}

	const handleClickOpen = () => {
		setOpen(true)
	}

	const handleDeleteClick = () => {
		dispatch(deleteItemById(itemId))
	}

	const onSubmit = data => {
		console.log(data)
		dispatch(updateItemById({itemId: itemId, title: data.title}))
		setOpen(false)
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
				<form 
					onSubmit={handleSubmit(onSubmit)}
					className={classes.fullWidth}
				>
					<DialogTitle id="alert-dialog-title">{"Edit"}</DialogTitle>
					<DialogContent className={classes.dialog}>
							<TextField
								name='title'
								label='Title'
								type='text'
								inputRef={register}
								control={control}
								className={classes.fullWidth}
								variant='outlined'
								defaultValue={title}
								required
							/>
					</DialogContent>
					<DialogActions>
						<Button onClick={handleClose} color="primary">
							Cancel
						</Button>
						<Button type='submit' color="primary" autoFocus>
							Submit
						</Button>
					</DialogActions>
				</form>	
      </Dialog>
		</Card>
	)
}

export default Item