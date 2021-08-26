const { stdin } = require("process");

let connection;
// setup interface to handle user input from stdin
const setupInput = function (conn) {
  connection = conn; // from play.js
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", (key) => {handleUserInput(key)} ); // this gave me some trouble

  return stdin;

};

const handleUserInput = function (key) {
  //console.log("key is: " + key);
  if (key === '\u0003') {
    let result = process.exit();
  }

  if (key === 'w') {
    // console.log("w presed = " + key)
    connection.write("Move: up");
  }

  if (key === 'a') {
    connection.write("Move: left");
  }
  if (key === 'd') {
    connection.write("Move: right");
  }
  if (key === 's') {
    connection.write("Move: down");
  }
  if (key === 'e') {
    connection.write("Say: Ayooo!");
  }


};

module.exports = {
  setupInput,
}