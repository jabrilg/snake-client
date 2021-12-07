

const { ClientRequest } = require("http");
const net = require("net");
const { IP, PORT } = require('./constant');

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
    
  });

  conn.on('data', (data) => {
    console.log('serve says: ', data)
  })

  


module.exports = {
  connect,
};
