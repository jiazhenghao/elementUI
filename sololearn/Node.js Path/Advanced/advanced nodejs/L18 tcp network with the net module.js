const server = require('net').createServer();

let counter = 0;
let socketsAll = {};

//moment a library deals with time zone
function timestamp() {
    const now = new Date();
    return `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`
}

server.on('connection', socket => {
    socket.id = counter++;
    //socketsAll[socket.id] = socket; 

    console.log('Client connected');
    socket.write("Please type your name: ");

    socket.on('data', data=> {
        if (!socketsAll[socket.id]) {
            socket.name = data.toString().trim();
            socket.write(`Welcome ${socket.name}!!!\n`);
            socketsAll[socket.id] = socket;
            return;
        }
        Object.entries(socketsAll).forEach(([key, cs]) => {
            if (socket.id == key) 
                return;//自己在聊天的时候的打字内容就不要显示了
            cs.write(`${socket.name} ${timestamp()}: `);
            cs.write(data, 'utf8');
        });

        //console.log('data is currently: ', data);
        
    });
    //socket.setEncoding('utf8');//buffer 就没了
    socket.on('end', ()=> {
        delete socketsAll[socket.id];
        console.log('Client disconnected');
    });
});

server.listen(8014, ()=> console.log('Server bound'));

// nc localhost 8014