const express = require('express')
const router = express.Router()

//get all blog
router.get('/',(req,res)=>{
    res.status(200).json({
        blogs:'array of blogs'
    })
})

//get a single blog
router.get('/:id',(req,res)=>{
    res.status(200).json({
        blogDetail:req.params.id + ' blog detail'
    })
})
module.exports = router;