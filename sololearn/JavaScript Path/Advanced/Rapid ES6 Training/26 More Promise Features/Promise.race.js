let p1 = new Promise();//p1 resolves after 4 seconds
let p2 = new Promise();//p2 rejects after 5 seconds

Promise.race([p1, p2]).then(
    function(value) { console.log('ok'); },
    function(reason) { console.log('No'); }
);
// 4 seconds delay
// Ok
