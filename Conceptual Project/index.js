const mongoose=require('mongoose');
const dotenv=require('dotenv');
const express=require('express');
const app=new express();
dotenv.config();
const port=process.env.PORT;
mongoose
    .connect(process.env.DATABASE)
    .then(()=>{
        console.log("Db connected");
        app.listen(port,()=>{
            console.log(`server running on port ${port}`);
        })
    })
    .catch((err)=>{
        console.log(err);
    })

