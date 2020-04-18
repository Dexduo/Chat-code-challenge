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
    // const user = await usermodel.create({
    //     name,
    //     email
    // })
    // return response.send(user)
    try {
        const user = await usermodel.create({
            name,
            email
        })
        return response.send(user)
    } catch(err) {
        return response.send(500, 'alert')
    }
})

app.get("/login", async (request, response) => {
    const { email } = request.body
    console.log(email)
    return response.send( await usermodel.find({email}) )
    // try {
    //     return response.send( await usermodel.find({email}) )
    // } catch(err) {
    //     return response.send(500, 'alert')
    // }
})

app.listen(3333)