// application routes

import express from 'express'

import {
	getApplications,
	createApplication,
} from '../controllers/applications.js'

const router = express.Router()

router.get('/', getApplications)
router.post('/', createApplication)

export default router
