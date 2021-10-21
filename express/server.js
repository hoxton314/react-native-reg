
const express = require('express')
const app = express()
const port = 8080
const users = [{ login: 'asdf' }, { login: 'aaaa' }, { login: 'qwert' }, { login: '1234' }]

app.get('/', (req, res) => {
    res.header('Access-Control-Allow-Origin: *')
    res.send(users)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
