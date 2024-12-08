const express = require("express")

const cors = require("cors")

const router = require("./router")

require("dotenv").config()
require('./connection')

const empServer = express()

empServer.use(cors())
empServer.use(express.json())
empServer.use(router)

const PORT= 4001 || process.env.PORT

empServer.listen(PORT,()=>{
    console.log(`Server running successfully on PORT ${PORT}`)
})