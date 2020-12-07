import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchItems } from '../../../actions'

import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import CircularProgress from '@material-ui/core/CircularProgress'

import Item from '../Item/'
import CreateItem from '../CreateItem/'
import useStyles from './styles'

const checkIsLoading = state => state.items.loading
const checkIsSignedIn = state => state.auth.isSignedIn
const checkItems = state => state.items.items

const ItemList = () => {
	const classes = useStyles()
	const dispatch = useDispatch()
	const items = useSelector(checkItems)
	const isSignedIn = useSelector(checkIsSignedIn)
	const isLoading = useSelector(checkIsLoading)

	useEffect(() => {
		if (isSignedIn) dispatch(fetchItems())
	}, [])

	const renderItemList = items.map(item => {
		console.log('from inside renderItemList: ' + item.title)
		return (
			<Item key={item._id} title={item.title} />
		)
	})

	return (
		<Container maxWidth='sm'  className={classes.root}>
			<Box className={classes.box}>
				{isLoading && <CircularProgress className={classes.circularProgress}/>}
				{renderItemList}
			</Box>
			<CreateItem 
				className={classes.createItem}
			/>
		</Container>
	)
}

export default ItemList