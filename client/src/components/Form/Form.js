import React, { useState } from 'react'
import { TextField, Button, Typography, Paper } from '@material-ui/core'
import { useDispatch } from 'react-redux'

import useStyles from './styles'
import { createApplication } from '../../actions/applications.js'

const Form = () => {
	const [applicationInfo, setApplicationInfo] = useState({
		positionTitle: '',
		companyName: '',
		jobID: '',
		applicationLink: '',
		status: '',
	})
	const classes = useStyles()
	const dispatch = useDispatch()

	const handleSubmit = (e) => {
		e.preventDefault()

		dispatch(createApplication(applicationInfo))
	}

	const clear = () => {}

	return (
		<Paper className={classes.paper}>
			<form
				autoComplete="off"
				noValidate
				className={`${classes.root} ${classes.form}`}
				onSubmit={handleSubmit}
			>
				<Typography variant="h6">Creating an Application</Typography>
				<TextField
					name="positionTitle"
					variant="outlined"
					label="Position Title"
					fullWidth
					value={applicationInfo.creator}
					onChange={(e) =>
						setApplicationInfo({
							...applicationInfo,
							positionTitle: e.target.value,
						})
					}
				/>
				<TextField
					name="companyName"
					variant="outlined"
					label="Company Name"
					fullWidth
					value={applicationInfo.creator}
					onChange={(e) =>
						setApplicationInfo({
							...applicationInfo,
							companyName: e.target.value,
						})
					}
				/>
				<TextField
					name="jobID"
					variant="outlined"
					label="Job ID"
					fullWidth
					value={applicationInfo.creator}
					onChange={(e) =>
						setApplicationInfo({
							...applicationInfo,
							jobID: e.target.value,
						})
					}
				/>
				<TextField
					name="applicationLink"
					variant="outlined"
					label="Application Link"
					fullWidth
					value={applicationInfo.creator}
					onChange={(e) =>
						setApplicationInfo({
							...applicationInfo,
							applicationLink: e.target.value,
						})
					}
				/>
				<TextField
					name="status"
					variant="outlined"
					label="Status"
					fullWidth
					value={applicationInfo.creator}
					onChange={(e) =>
						setApplicationInfo({
							...applicationInfo,
							status: e.target.value,
						})
					}
				/>
				<Button
					className={classes.buttonSubmit}
					variant="contained"
					color="primary"
					size="large"
					type="submit"
					fullWidth
				>
					SUBMIT
				</Button>
				<Button
					className={classes.buttonSubmit}
					variant="contained"
					color="secondary"
					size="small"
					onClick={clear}
					fullWidth
				>
					CLEAR
				</Button>
			</form>
		</Paper>
	)
}

export default Form

// the '...' allows you to change specific data from the applicationInfo
