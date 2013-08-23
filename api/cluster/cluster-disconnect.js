/**
 * http://www.nodejs.org/api/cluster.html#cluster_worker_disconnect
 * 
 * 
 */

var cluster = require('cluster');

if (cluster.isMaster) {
	var worker = cluster.fork();
	var timeout;

	worker.on('listening', function(address) {
		worker.disconnect();
		timeout = setTimeout(function() {
			worker.send('force kill');
		}, 2000);
	});

	worker.on('disconnect', function() {
		clearTimeout(timeout);
	});

} else if (cluster.isWorker) {
	var net = require('net');
	var server = net.createServer(function(socket) {
		// connection never end
	});

	server.listen(8000);

	server.on('close', function() {
		// cleanup
	});

	process.on('message', function(msg) {
		if (msg === 'force kill') {
			server.close();
		}
	});
}
