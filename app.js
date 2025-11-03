const express =require('express');
const adminBlogPostRoute = require('./api/admin/routes/BlogPost')


app.use('/admin/blog',adminBlogPostRoute)
app.use((req,res)=>{
    res.status(200).json({
        msg:'ok'
    })

})

module.exports =app;