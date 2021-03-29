// Functions for application info
import ApplicationInfo from '../models/applicationInfo.js'

export const getApplications = async (req, res) => {
	// routes will always have a reqest and response
	try {
		const getApps = await ApplicationInfo.find()
		// eslint-disable-next-line no-console
		console.log(getApplications) // does not need to be console logged
		res.status(200).json(getApps) // if data exist, set status to 200
	} catch (error) {
		res.status(404).json({ message: error.message })
	}
}

export const createApplication = async (req, res) => {
	const application = req.body
	const newApplication = new ApplicationInfo(application)
	try {
		await newApplication.save()

		req.status(201).json(newApplication) // look up http codes
	} catch (error) {
		req.status(409).json({ message: error.message })
	}
	res.send('Application Creation')
}
