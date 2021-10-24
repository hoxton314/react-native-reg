
const express = require('express')
const app = express()
const port = 8080
var users = [
    { login: 'asdf', id: '58694a0f-3da1-471f-bd96-145571e29d76', password: '1234', date: '2021-10-22T20:54:45.194Z' },
    { login: 'aaaa', id: '58694a0f-3da1-471f-bd96-145571e69d72', password: '1111', date: '2021-10-22T20:54:45.194Z' },
    { login: 'qwert', id: '58694a0f-3da1-476f-bd96-145571e29d72', password: '4444', date: '2021-10-22T20:54:45.194Z' },
    { login: '1234', id: '58664a0f-3da1-471f-bd96-145571e29d72', password: 'asdf', date: '2021-10-22T20:54:45.194Z' }
]
const bodyParser = require('body-parser')
const { v4: uuidv4 } = require('uuid');
app.use(bodyParser.json());

app.get('/getusers', (req, res) => {
    console.log('getusers request')
    res.header('Access-Control-Allow-Origin: *')
    res.send(users.map(a => ({ login: a.login, id: a.id })))
})

app.post('/register', (req, res) => {
    console.log('register request')
    console.log(req.body)
    res.header('Access-Control-Allow-Origin: *')
    let loginarr = users.map(a => a.login)
    if (loginarr.some(a => a == req.body.username)) {
        res.send({ data: 'Login already exist' })
    } else if (req.body.username === '' || req.body.username === undefined) {
        res.send({ data: 'Login input is empty' })
    } else if (req.body.password === '' || req.body.password === undefined) {
        res.send({ data: 'Password input is empty' })
    } else {
        users.push({ login: req.body.username, id: uuidv4(), password: req.body.password, date: req.body.date })
        console.log(users[users.length - 1])
        res.send({ data: 'good' })
    }
})
app.post('/delete', (req, res) => {
    console.log('delete request')
    console.log(req.body)
    users = users.filter(a=> a.login!=req.body.username)
    res.header('Access-Control-Allow-Origin: *')
    res.send({ data: 'deleted' })
})

app.post('/details', (req, res) => {
    console.log('details request')
    console.log(req.body)
    res.header('Access-Control-Allow-Origin: *')
    res.send(users.filter(a => a.login == req.body.username))
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})


