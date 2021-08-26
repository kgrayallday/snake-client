const net = require("net");

const { connect } = require('./client');
const { setupInput } = require("./input");

// establishes a connection with the game server

console.log("Connecting ...");
// connect(); dont need this because now it would run twice
const conn = connect();

setupInput(conn); // ? Update play.js to pass the object returned from connect into the setupInput function.