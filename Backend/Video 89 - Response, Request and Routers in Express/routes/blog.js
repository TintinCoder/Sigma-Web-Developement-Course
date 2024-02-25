const express = require("express")
const router = express.Router()

router.get('/', (req, res)=>{
    res.send('Blogs Home Page')
})

router.get('/blogpost/:slug', (req, res)=>{
    res.send(`The blog post slug is ${req.params.slug}`)
})

module.exports = router;