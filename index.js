'use strict'

const mongoose = require('mongoose');
const app = require('./app');

const config = require('./config');

mongoose.connect(config.db, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}).then(() => {
    console.log(`DB Connected! PORT: ${config.db}`);

    app.listen(config.port, () => {
        console.log(`Api rest corriendo en http://localhost:${config.port}`);
    });

}).catch(err => {
    console.log(`Error conectado la BD en el puerto: ${config.port} Detalle: ${err}`);

});

