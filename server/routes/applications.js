import express from 'express'
const router = express.Router()

router.get('/', (req,res) => {  // routes will always have a reqest and response
        res.send('This works')
})

export default router
