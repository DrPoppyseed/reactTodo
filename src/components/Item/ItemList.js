import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import CircularProgress from '@material-ui/core/CircularProgress'

import Item from './Item'
import CreateItem from './CreateItem'

const useStyles = makeStyles({
	root: {
		display: 'flex',
		flexDirection: 'column',
		height: '70vh',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	box: {
		marginTop: 150,
	},
	item: {
		marginTop: 10
	},
	circularProgress: {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)'
	},
	createItem: {
		
	}
})

const ItemList = () => {
	const classes = useStyles()
	const [itemList, setItemList] = useState([])
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		setIsLoading(true)
		axios({
			url: 'http://localhost:8003',
			method: 'GET',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json;charset=UTF-8'
			}
		})
			.then(response => {
				setIsLoading(false)
				setItemList([...response.data.items])
			})
			.catch(err => {
				setIsLoading(false)
				console.log(err)
			})
	}, [])

	const renderItemList = itemList.map(item => {
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

const mapStateToProps = state => {
	return { items: state.items }
}

export default connect(
	mapStateToProps
)(ItemList)