//https://nodejs.org/api/url.html
const url = require('url');
const urlString = 'https://www.pluralsight.com/search?q=buna';
//console.log(url.parse(urlString, true));
// Url {
//     protocol: 'https:',
//     slashes: true,
//     auth: null,
//     host: 'www.pluralsight.com',
//     port: null,
//     hostname: 'www.pluralsight.com',
//     hash: null,
//     search: '?q=buna',
//     query: [Object: null prototype] { q: 'buna' },
//     pathname: '/search',
//     path: '/search?q=buna',
//     href: 'https://www.pluralsight.com/search?q=buna'
//   }

//on the other hand
const urlObject = {
    protocol: 'https',
    host: 'www.pluralsight.com',
    search: '?q=buna',
    pathname: '/search',
};
console.log(url.format(urlObject));

const querystring = require('querystring');

// console.log(
//     querystring.stringify({
//         name: 'Samer Buna',
//         website: 'jsComplete.com/samer-buna'
//     })
// );
// querystring.parse('name=Samer%20Buna&website=jsComplete.com%2Fsamer-buna');
