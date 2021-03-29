import ApplicationInfo from '../models/applicationData.js'

export const getApplications = async (req,res) => {  // routes will always have a reqest and response
        try {
            const getApplications = await ApplicationData.find()
            console.log(getApplications) // does not need to be console logged
            res.status(200).json(getApplications) // if data exist, set status to 200
        }catch(error){
            res.status(404).json({message: error.message})
        }
}

export const createApplication = async(req, res) => {
    const application = req.body
    const newApplication = new ApplicationData(application)
    try {
        await newApplication.save()

        req.status(201).json(newApplication) // look up http codes
    } catch (error) {
        req.status(409).json({message: error.message})
        
    }
    res.send('Application Creation')
}
