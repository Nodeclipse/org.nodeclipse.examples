/**
 * http://www.nodejs.org/api/cluster.html#cluster_event_fork
 * 
 * 
 */

var cluster = require('cluster');
var http = require('http');
var numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
	// Fork workers.
	for ( var i = 0; i < numCPUs; i++) {
		cluster.fork();
	}

	var timeouts = [];
	function errorMsg() {
		console.error("Something must be wrong with the connection ...");
	}

	cluster.on('fork', function(worker) {
		timeouts[worker.id] = setTimeout(errorMsg, 2000);
	});
	cluster.on('listening', function(worker, address) {
		clearTimeout(timeouts[worker.id]);
	});
	cluster.on('exit', function(worker, code, signal) {
		clearTimeout(timeouts[worker.id]);
		errorMsg();
	});
	
} else {
	// Workers can share any TCP connection
	// In this case its a HTTP server
	http.createServer(function(req, res) {
		res.writeHead(200);
		res.end("hello world\n");
	}).listen(8000);
}


