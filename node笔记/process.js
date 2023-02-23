const child_process = require('child_process');
var workerProcess = child_process.spawn('ping', ['linuxcommand.org']);
 
workerProcess.stdout.on('data', function (data) {
    console.log('stdout: ' + data);
});
