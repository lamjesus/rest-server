const Server = require("./model/Server.js");
const server = new Server();

server.routes();
server.listen();
