const express = require('express')
const app = express();
const path = require('path')

const {PythonShell} = require('python-shell')

app.get("/", (req, res, next)=>{
    res.sendFile(path.join(__dirname + '/main.html'));
})

app.listen(8000);