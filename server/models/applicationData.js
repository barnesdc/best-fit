import mongoose from 'mongoose'

// Schema contains a funciton that contains an object
// Schema allows you to create uniformity within documents
const applicationSchema = mongoose.Schema({
    positionTitle: String,
    companyName: String,
    location: {
        city: String,
        state: String
    },
    jobID: String,
    applicationLink: String,
    status: String,
    createdAt:{
        type: Date,
        default: new Date()
    } 
})

const ApplicationInfo = mongoose.model('ApplicationInfo', applicationSchema)

export default ApplicationInfo
