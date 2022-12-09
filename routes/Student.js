const express = require('express')
const routes = express.Router()
var bc = require('bcrypt')
var jwt = require('jsonwebtoken')
var User = []

message = "Not Connected";

function toList() {
    routes.get('/List', (req, res) => {
        res.render('index', { User: User })
    })
}
toList()

routes.get('/Login', (req, res) => {
    res.render('login')

})


routes.post('/SignUp', (req, res) => {
    if (!(User.find(e => e.username == req.body.username))) {
        User.push({
            username: req.body.username,
            password: bc.hashSync(req.body.password, 10)
        })
        res.json({ username: req.body.username, password: req.body.password })
    } else
        return res.status(400).send("Already exist")

    console.log(User)

})
routes.post('/Login', (req, res) => {
    /*if (User.find(el => (el.username = req.body.username) && bc.compareSync(req.body.password, el.password))) {
        var username = req.body.username
        var user = { name: username }
        var accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
        res.status(200).json({ accessToken: accessToken })
        req.session.message = "User Connected"
        res.render('header', { message: req.session.message })


    } else {
        res.status(400).send("User not Found")

    }*/
    var username = req.body.username

    var user = { name: username }
    var accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)

    console.log(res.json({ username: req.body.username }))



})





module.exports = routes