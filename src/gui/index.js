const express = require('express')
const app = express();
const path = require('path')
const PORT = 1700
const ip = require('ip')
const {PythonShell} = require('python-shell')
const pages = [
    "up", "down", "right", "left"
]

app.get("/", (req, res, next)=>{
    console.log('welcome to main')
    res.sendFile(path.join(__dirname + '/main.html'));
})

app.get("/right", (req, res, next)=>{
    console.log('you moved right')
    res.sendFile(path.join(__dirname + '/routers/right.html'));
})
app.get("/left", (req, res, next)=>{
    console.log('you moved left')
    res.sendFile(path.join(__dirname + '/routers/left.html'));
})
app.get("/jump", (req, res, next)=>{
    console.log('you jumped')
    res.sendFile(path.join(__dirname + '/routers/jump.html'));
})
app.get("/run", (req, res, next)=>{
    console.log('you run')
    res.sendFile(path.join(__dirname + '/routers/run.html'));
})
app.get("/stationary", (req, res, next)=>{
    console.log('youre not moving')
    res.sendFile(path.join(__dirname + '/routers/stationary.html'));
})



app.listen(PORT, '0.0.0.0', function() {
    console.log('Pleas open this address on your browser\'s phone: ')
    console.log(ip.address() + ":" + PORT)
    console.log('Close this cmd if you wanna stop using it.')
});