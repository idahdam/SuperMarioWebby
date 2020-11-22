const express = require('express')
const app = express();
const path = require('path')
const PORT = 1700
const ip = require('ip')
const {PythonShell} = require('python-shell')

const pages = [
    "up", "down", "right", "left"
]

app.use("/static", express.static('./static'));

app.get("/", (req, res, next)=>{
    console.log('welcome to main')
    res.sendFile(path.join(__dirname + '/main.html'));
})

app.get("/right", (req, res, next)=>{
    console.log('you moved right')
    res.sendFile(path.join(__dirname + '/routers/right.html'))

    var options = {
        pythonOptions: ['-u'],
        scriptPath: path.relative(__dirname, '../python'),
        mode: 'text',
        args: ['right']
    };

    new PythonShell('realController.py', options, function(err, result){
        if (err) throw err;
        console.log('results: %j', results);
    })

})
app.get("/left", (req, res, next)=>{
    console.log('you moved left')
    res.sendFile(path.join(__dirname + '/routers/left.html'));

    var options = {
        pythonOptions: ['-u'],
        scriptPath: path.relative(__dirname, '../python'),
        mode: 'text',
        args: ['left']
    };

    new PythonShell('realController.py', options, function(err, result){
        if (err) throw err;
        console.log('results: %j', results);
    })
})
app.get("/jump", (req, res, next)=>{
    console.log('you jumped')
    res.sendFile(path.join(__dirname + '/routers/jump.html'));

    var options = {
        pythonOptions: ['-u'],
        scriptPath: path.relative(__dirname, '../python'),
        mode: 'text',
        args: ['jump']
    };

    new PythonShell('realController.py', options, function(err, result){
        if (err) throw err;
        console.log('results: %j', results);
    })
})
app.get("/run", (req, res, next)=>{
    console.log('you run')
    res.sendFile(path.join(__dirname + '/routers/run.html'));

    var options = {
        pythonOptions: ['-u'],
        scriptPath: path.relative(__dirname, '../python'),
        mode: 'text',
        args: ['run']
    };

    new PythonShell('realController.py', options, function(err, result){
        if (err) throw err;
        console.log('results: %j', results);
    })
})
app.get("/stationary", (req, res, next)=>{
    console.log('youre not moving')
    res.sendFile(path.join(__dirname + '/routers/stationary.html'));

    var options = {
        pythonOptions: ['-u'],
        scriptPath: path.relative(__dirname, '../python'),
        mode: 'text',
        args: ['stay']
    };

    new PythonShell('realController.py', options, function(err, result){
        if (err) throw err;
        console.log('results: %j', results);
    })
})



app.listen(PORT, '0.0.0.0', function() {
    console.log('Pleas open this address on your browser\'s phone: ')
    console.log(ip.address() + ":" + PORT)
    console.log('Close this cmd if you wanna stop using it.')
});