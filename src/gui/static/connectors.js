// var myPythonScriptPath = '../python/realController.py';
// import {PythonShell} from '../node_modules/python-shell/index.d.ts';
// let {PythonShell} = require('python-shell')
let pyshell = new PythonShell('../python/realController.py')
var arg = document.getElementById('input').value


var options = {
    pythonPath: '../python',
    scriptPath: ['-u'],
    mode: 'text',
    args: ['arg']
};

PythonShell.run(myPythonScriptPath, options, function (err, results) {
    if (err) throw err;
    // results is an array consisting of messages collected during execution
    console.log('results: %j', results);
});