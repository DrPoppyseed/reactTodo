import { makeStyles } from '@material-ui/core/styles'

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
		height: 50,
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

export default useStyles