const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');
const session = require('express-session');
require("dotenv").config();
const student = require('./routes/Student')
app.set('views', './view');

app.set('view engine', 'ejs');
app.use(express.static('public'))
app.use(express.json())
app.use('/student', student)
app.use(session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: false
}))

/*app.get('/about', (req, res) => {
    res.statusCode = 200;
    var data = fs.readFileSync('./index.html')
    res.end(data);
})*/
app.post('/data', (req, res) => {
        console.log(req.body)
        res.send(req.body)
    })
    /*app.get('*', (req, res) => {
        res.statusCode = 400;
        var data = fs.readFileSync('./404.html');
        res.end(data);
    })*/

app.listen(port, () => {
    console.log('listening on port 3000')
});