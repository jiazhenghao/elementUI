const cluster = require('cluster');
const os = require('os');

if (cluster.isMaster) {
    const cpus = os.cpus().length;
    for (let i = 0; i < cpus; i++) {
        cluster.fork();
    }
    console.log(`Master PID: ${process.pid}`);

    //针对异常退出的子节点，实现重启
    cluster.on('exit', (worker, code, signal) => {
        if (code !== 0 && !worker.exitedAfterDisconnect) {
            console.log(`Worker ${worker.id} crashed. ` +
                'Starting a new worker...');
            cluster.fork();
        }
    });

    //当master需要重启，子节点一个个重启
    process.on('SIGUSR2', () => {
        const workers = Object.values(cluster.workers);
        const restartWorker = (workerIndex) => {
            const worker = workers[workerIndex];
            if (!worker) return;

            worker.on('exit', () => {
                if (!worker.exitedAfterDisconnect) return;
                console.log(`Exited process ${worker.process.pid}`);
                cluster.fork().on('listening', () => {
                    restartWorker(workerIndex + 1);
                });
            });

            worker.disconnect();
        };

        restartWorker(0);
    });

}
else {
    require('./server');
}

//to test, use kill -SIGUSR2 73541(pid)
//first start cluster.js
//then ab -c200 -t10 http://localhost:8088/
//then kill
//to see, there is no failure at all.

