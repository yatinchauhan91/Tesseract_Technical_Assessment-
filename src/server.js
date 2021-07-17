
var argv = require('minimist')(process.argv.slice(2));
require('dotenv').config({ path: `./.${argv.NODE_ENV}.env` });

const http = require("http");
const express = require("express");

const app = express();

require('./loaders/mongoDb');
require("./loaders/index")(app);

const server = http.createServer(app);

server.listen(process.env.SERVER_PORT, () => {
  console.log("Server running on " + process.env.SERVER_PORT);
});