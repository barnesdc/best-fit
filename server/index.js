import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import bodyParser from 'body-parser'

import applicationRoutes from './routes/applications.js'

const app = express()

app.use('/applications', applicationRoutes) // localhost:5001/appplications

app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
app.use(cors())

// https://www.mongodb.com/cloud/atlas
const MONGO_USER=  process.env.MONGO_USER
const MONGO_PASS = process.env.MONGO_PASS
const MONGO_URI = `mongodb+srv://${MONGO_USER}:${MONGO_PASS}@cluster0.aih8p.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
const PORT = process.env.PORT || 5000

mongoose.connect(MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
.catch((error)=>console.log(error.message))

mongoose.set('useFindAndModify', false)

