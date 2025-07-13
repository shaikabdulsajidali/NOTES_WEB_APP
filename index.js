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
    fs.readdir(`./files`,(err,fileslist)=>{
        res.render("index",{ filesarray:fileslist})
    })
    
})

app.listen(3000,()=>{
    console.log("Server listening....")
})