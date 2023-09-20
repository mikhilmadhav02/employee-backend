require('dotenv').config()
const express = require('express')
const cors = require('cors')
require('./connection/mongodb')
const router = require('./router/routes')


const server = express()

server.use(cors())
server.use(express.json())
server.use(router)

const PORT = 3000 || process.env.PORT

server.listen(PORT,()=>{
    console.log('server started working at port==',PORT);
})


server.get('/',(req,res)=>{
    console.log(`all reqst starts working`);
})