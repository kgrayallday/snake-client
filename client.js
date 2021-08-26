const net = require("net");

const connect = function () {          // establish connection
  const conn = net.createConnection({
    host: '135.23.223.133', // IP address here,
    port: 50542 // PORT number here,
  });

  // logging data returned from the server? "you ded cuz you idled"
  conn.on('data', (data) => {
    console.log(data.toString());
    //conn.end();
  });

  conn.on('connect', () => {
    conn.write('HName: KMG');
    // const timer = setTimeout( () => {conn.write("Move: up");}, 3000 );
    console.log("successfully connected to game server");
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // message logged to self when connection ends
  conn.on('end', () => {
  console.log('disconnected from server');
  });

  return conn;
};

module.exports = {
  connect
};