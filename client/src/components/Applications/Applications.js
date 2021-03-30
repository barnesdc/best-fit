import React from 'react'
import { useSelector } from 'react-redux'

import Application from './Application/Application.js'
import useStyles from './styles'

const Applications = () => {
	const classes = useStyles()
	const applications = useSelector((state) => state.applications)

	console.log(applications)
	return (
		<>
			<h1 className={classes.actionDiv}>Applications</h1>
			<Application />
			<Application />
		</>
	)
}

export default Applications
