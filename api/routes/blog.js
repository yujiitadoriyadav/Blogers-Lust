const express =require('express')
const router = express.Router()
const mongoose =require('mongoose')
const Blog =require('../model/blog')

//post blog by admin  ...
router.post('/',(req,res)=>{
    const newBlog =new Blog({
        _id:new mongoose.Types.ObjectId,
        title:req.body.title,
        description:req.body.description,
        imageUrl:req.body.imageUrl
    })
    newBlog.save()
    .then(result=>{
        res.status(200).json({
            new_blog:result
        })
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({
            error:err
        })
    })
})


module.exports = router;