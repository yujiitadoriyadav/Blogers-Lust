const express =require('express');
const app =express();
const mongoose =require('mongoose')
const bodyParser =require('body-parser')
const {urlencoded,json} = require('body-parser')
const blogRoute = require('./api/routes/blog')
//const categoryRoute =require('./api/routes/category')

mongoose.connect('mongodb+srv://2023jeeadvanced:DEvpratap@cluster0.utlrlak.mongodb.net/?appName=Cluster0')
mongoose.connection.on('connected',()=>{
    console.log('connected with database ')
})
mongoose.connection.on('error',(err)=>{
    console.log('not  connected with database ')
    console.log(err)
})

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());


app.use('/blog',blogRoute)
//app.use('/blog',categoryRoute)

app.use((req,res)=>{
    res.status(200).json({
        msg:'ok'
    })

})

module.exports =app;