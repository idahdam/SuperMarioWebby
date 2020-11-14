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
    res.sendFile(path.join(__dirname + '/main.html'));
})

// app.get("/:movement", (req, res, next)=>{
    
// })



app.listen(PORT, '0.0.0.0', function() {
    console.log('Pleas open this address on your browser\'s phone: ')
    console.log(ip.address() + ":" + PORT)
    console.log('Close this cmd if you wanna stop using it.')
});