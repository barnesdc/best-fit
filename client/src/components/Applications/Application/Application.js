import React from 'react'
import useStyles from './styles'

const Application = () => {
	const classes = useStyles()

	return <h1 className={classes.title}>Application</h1>
}

export default Application
