const dns = require('dns');

// dns.lookup('pluralsight.com', (err, address)=> {
//     console.log(address);
// });
//34.208.253.248

// dns.resolve4('pluralsight.com', (err, address)=> {
//     console.log(address);
// });
//[ '34.208.253.248', '50.112.175.204', '52.43.13.197' ]

dns.resolve('pluralsight.com', 'MX', (err, address) => {
    console.log(address);
});
// [
//     { exchange: 'us-smtp-inbound-2.mimecast.com', priority: 20 },
//     { exchange: 'us-smtp-inbound-1.mimecast.com', priority: 10 }
//   ]

dns.reverse('50.112.175.204', (err, hostnames)=> {
    console.log(hostnames);
}); 