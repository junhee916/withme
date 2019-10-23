const express = require('express')
const app = express()

app.get('/', function(req, res) {
    res.send("hello there")
})

app.listen(80, function() {
    console.log("port 80 listen")
})