// module.export = {
//     port: process.env.PORT // 8080
// };
process.env.PORT = 1010;
const config = {
    port: process.env.PORT // 1010
};
//console.log(config);
module.exports = config;
