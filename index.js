const { application } = require('express');
const express=require('express')
const app=express()
const Port=5000;
const authMiddleware=(req,res,next)=>{
    const d=new Date()
    // d.setHours(10)
    // d.setDate(d.getDate() + 3)
    console.log('day',d.getDay())
    console.log('hours',d.getHours())
    if (d.getDay()===6 || d.getDay()===7 || d.getHours()>17 || d.getHours()<9 ){
        res.send('<h1> We are open from Monday to Friday from 9 Am to 5 Pm </h1>')
    }
    else
    {next()}
}
app.use(authMiddleware)
app.get('/',(req,res)=>{
    res.sendFile(__dirname +'/Pages/Home.html')
})
app.get('/Contact',(req,res)=>{
    res.sendFile(__dirname +'/Pages/Contact.html')
})
app.get('/Services',(req,res)=>{
    res.sendFile(__dirname +'/Pages/Services.html')
})
app.get('/Style.css',(req,res)=>{
    res.sendFile(__dirname +'/Pages/Style.css')
})
app.listen(Port,err=>err? console.log(err):console.log(`Server is running on port ${Port}` ))