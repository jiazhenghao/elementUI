const cluster = require('cluster');
const os = require('os');

// ***** Mock DB Call
const numberOfUsersInDB = function() {
    this.count = this.count || 5;
    this.count = this.count * this.count;
    return this.count;
}
// *****

if (cluster.isMaster) {
    const cpus = os.cpus().length;
    console.log(`Forking for ${cpus} CPUs`);
    for (let i = 0; i < cpus; i++) {
        cluster.fork();
    }
    //console.dir(cluster.workers, {depth:0});主进程向子进程通信
    // Object.values(cluster.workers).forEach(worker => {
    //     worker.send(`Hello Workder ${worker.id}`);
    // });

    const updateWorkers = () => {
        const usersCount = numberOfUsersInDB();
        Object.values(cluster.workers).forEach(worker=> {
            worker.send({usersCount});
        });
    };

    updateWorkers();
    setInterval(updateWorkers, 10000);

} else {
    require('./server');
}

//Requests per second:    197.45 [#/sec] (mean)