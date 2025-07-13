const express=require('express')
const app=express()

const path=require('path')
const fs=require('fs')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(express.static(path.join(__dirname,'public')))
app.set('view engine','ejs')

app.get("/",(req,res)=>{
    console.log("hi");
    fs.readdir(`./files`,(err,filelist)=>{               //reading files from 'files' folder, 'err' will contain an error if reading the folder fails,filelist is list of files in 'files' folder
        res.render("index",{ filesarray:filelist})
    })
    
})

app.listen(3000,()=>{
    console.log("Server listening....")
})