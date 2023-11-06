const express = require('express')
const hbs = require('hbs')
require('dotenv').config();

const app= express()
const port=  process.env.PORT 

app.set('view engine', 'hbs')

hbs.registerPartials(__dirname +'/views/partials')

app.use(express.static('public'))

app.get('/',(req, res)=>{
    res.render('index')
})
app.get('/sobremi',(req, res)=>{
    res.render('sobremi')
})
app.get('/portafolio',(req, res)=>{
    res.render('portafolio')
})
app.get('/servicios',(req, res)=>{
    res.render('servicios')
})
app.get('/contacto',(req, res)=>{
    res.render('contacto')
})
app.get('/derivada',(req, res)=>{
    res.render('derivada')
})
app.get('/analizador',(req, res)=>{
    res.render('analizador')
})
app.get('/sintactico',(req, res)=>{
    res.render('sintactico')
})

app.get('/app',(req, res)=>{
    res.render('app')
})
app.get('/ejercicioscss',(req, res)=>{
    res.render('ejercicioscss')
})

app.get('*',(req,res)=>{
    res.render('404')
})

app.listen(port, ()=>{
    console.log(`Example app listening at http://localhost ${port}`);
})
