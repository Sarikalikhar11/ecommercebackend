// import {User, Order, Product, Category, Address} from './services/mongodb';

import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
dotenv.config('../.env')

const app = express()
app.use(express.static('public'));
app.use(cors())
app.use(express.json())
const PORT = process.env.PORT || 8080

app.get('/',(req,res)=>res.send(`Server is running on port ${PORT}Auth page (CI/CD)`))

app.get('/login',(req,res)=>res.send(`This is login page`))

app.get('/auth',(req,res)=>res.sendFile(__dirname+'/public/auth.html'))

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT} `)
})