const mongoose = require('mongoose');
const express = require('express');
const app = express();

const db='mongodb+srv://Amber:amber786@cluster0.wionw.mongodb.net/test'
mongoose.connect(db,{
    useNEwurlParser:true,
    useCreateIndex:true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(()=>{
    console.log(`connection successfully`);
}).catch((err) => console.log(`no connection`));

const middleware =(req,res,next) => {
    console.log(`hello my middleware`);
    next();
}

app.get('/', (req,res)=>{
    res.send(`hello`);
});