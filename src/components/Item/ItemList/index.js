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
const checkItems = state => state.items.items

const ItemList = () => {
	const classes = useStyles()
	const dispatch = useDispatch()
	const items = useSelector(checkItems)
	const isLoading = useSelector(checkIsLoading)

	useEffect(() => {
		dispatch(fetchItems())
	}, [])

	useEffect(() => {
		console.log('from inside useEffect/isLoading: ' + isLoading)
		console.log('from inside useEffect/items...')
		console.log(items)
	}, [isLoading, items])

	const renderItemList = items.map(item => {
		console.log('from inside renderItemList: ' + item.title)
		return (
			<Item key={item.title} title={item.title} />
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