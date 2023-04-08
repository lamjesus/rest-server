require('dotenv').config();

const express = require('express')
const cors = require('cors')
class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.userPath = '/api/users';
        // Middlewares
        this.middlewares();

        // Rutas de mi aplicación
        //this.routes();
    }
    routes() {
        this.app.use(this.userPath, require('../routes/usersRoutes'));
    }

    middlewares() {
        // Directorio público
        this.app.use(express.static('public'));
        // Lectura y parseo del body
        this.app.use(express.json());
        // CORS
        this.app.use(cors())
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', this.port);
        });
    }
}
module.exports = Server;