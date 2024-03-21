const express = require("express")
const app =express()

const port = process.env.PORT || 3000
const path =require("path") 
const x = path.join(__dirname ,"../public")
app.use(express.static(x))

// app.get('/' ,(req,res)=>{
//     res.send("hello samasimooo")
// })

// app.get('/about' ,(req,res)=>{
//     res.send("abouuuuut")
// })
// app.get('/services' ,(req,res)=>{
//     res.send("services")
// })
// app.get('/teams' ,(req,res)=>{
//     res.send("teams")
// })







app.set("view engine" ,'hbs')

const viewDirectory =path.join(__dirname ,'../temp1/views')
app.set("views" , viewDirectory)
var hbs=require("hbs")
const partialsPath =path.join(__dirname ,'../temp1/partials')
hbs.registerPartials(partialsPath)

app.get('/', (req,res)=>{
    res.render('index',{
        title:'Home',
        desc:'this is home page ya samasimoo'
    })
})

app.get('/services' ,(req,res)=>{
    res.render("services",{
        title:"service",
        desc:"they are our service",
        city :"mansoura",
        age:40
    })
})

app.listen(port ,()=>{
    console.log(`app is listening in port ${port}`)
})