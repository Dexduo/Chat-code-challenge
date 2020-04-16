const express = require("express")
const usermodel = require("./models/user")
const mongoose = require("mongoose")
const cors = require('cors')

const app = express()

app.use(cors())

app.use(express.json())

mongoose.connect("mongodb+srv://Dexduo:startnow934@cluster0-omvem.mongodb.net/test?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.post('/register', async (request, response) => {
    const { name, email } = request.body
    const user = await usermodel.create({
        name,
        email
    })
    return response.send(user)
})

app.get("/login", async (request, response) => {
    const { email } = request.query
    return response.send( await usermodel.find({email}) )
})

app.listen(3333)