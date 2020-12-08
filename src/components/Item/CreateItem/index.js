import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { createItem } from '../../../actions'
import { useDispatch, useSelector } from 'react-redux'

import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import IconButton from '@material-ui/core/IconButton'
import SendIcon from '@material-ui/icons/Send'
import useStyles from './styles'

const getToken = state => state.auth.token

const CreateItem = () => {
  const { register, handleSubmit, control, setValue } = useForm()
  const token = useSelector(getToken)
  const dispatch = useDispatch()
  const classes = useStyles()

  const onSubmit = data => {
    dispatch(createItem([token, data]))
    setValue('title', '')
  }

  return (
    <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
      <TextField
        as={TextField}
        inputRef={register}
        variant="outlined"
        className={classes.field}
        label="Todo..."
        name="title"
        control={control}
        defaultValue=""
      />
      <IconButton type="submit">
        <SendIcon />
      </IconButton>
    </form>
  )
}

export default CreateItem
