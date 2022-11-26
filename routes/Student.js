const express = require('express')
const routes = express.Router()
var bc = require('bcrypt')
var User = []

routes.post('/SignUp', (req, res) => {
    if (!(User.find(e => e.username == req.body.username))) {
        User.push({
            username: req.body.username,
            password: bc.hashSync(req.body.password, 10)
        })
        res.send(req.body)
    } else
        return res.status(400).send("Already exist")

    console.log(User)

})
routes.post('/Login', (req, res) => {
    if (User.find(el => (el.username = req.body.username) && bc.compareSync(req.body.password, el.password))) {
        res.status(200).send("User Authentified")
    } else {
        res.status(400).send("User not Found")
    }



})





module.exports = routes