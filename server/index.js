import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import bodyParser from 'body-parser'

const app = express() 

app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
app.use(cors())

// https://www.mongodb.com/cloud/atlas
const MONGO_URI = 'mongodb+srv://bestfitadmin:bestfitadmin1234@cluster0.aih8p.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000

mongoose.connect(MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
.catch((error)=>console.log(error.message))

mongoose.set('useFindAndModify', false)
