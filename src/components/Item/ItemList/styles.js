import { makeStyles } from '@material-ui/core/styles'

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

export default useStyles