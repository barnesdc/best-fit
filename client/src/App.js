import './App.css'
import React, { useEffect } from 'react'
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'
import { useDispatch } from 'react-redux'

import { getApplications } from './actions/applications'
import Applications from './components/Applications/Applications.js'
import Form from './components/Form/Form.js'
import defaultImage from './images/job-application.png'
import useStyles from './styles'

function App() {
	const classes = useStyles()
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getApplications())
	}, [dispatch])

	return (
		<Container maxWidth="lg">
			<AppBar
				className={classes.appBar}
				position="static"
				color="inherit"
			>
				<Typography
					className={classes.heading}
					variant="h2"
					align="center"
				>
					'Best Fit' Application Tracker
				</Typography>
				<img
					className={classes.image}
					src={defaultImage}
					alt="defaultImage"
					height="240"
				/>
			</AppBar>
			<Grow in>
				<Container>
					<Grid
						container
						justify="space-between"
						alignItems="stretch"
						spacing={3}
					>
						<Grid item xs={12} sm={7}>
							<Applications />
						</Grid>
						<Grid item xs={12} sm={4}>
							<Form />
						</Grid>
					</Grid>
				</Container>
			</Grow>
		</Container>
	)
}

export default App
