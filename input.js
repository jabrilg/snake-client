

let connection;

const setupInput = function (conn) {
   connection = conn;
   const stdin = process.stdin;
   stdin.resume();
   stdin.on('data', handleUserInput);
   return stdin;
};

const handleUserInput = (key) => {
  
  if(key =='\u0003') {
    process.exit();
  }

    if(key == 's') {
    connection.write('Move: down');
  }

    if(key =='a') {
    connection.write('Move: left');
  }

    if(key === 'h') {
    connection.write("Say: snake")
  };

}

module.exports = {
  setupInput
}