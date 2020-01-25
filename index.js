'use strict'

const mongoose = require('mongoose');
const app = require('./app');

const PORT_HTTP = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || 27017;

mongoose.connect(`mongodb://localhost:${MONGO_URI}/shop`, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}).then(() => {
    console.log(`DB Connected! PORT: ${MONGO_URI}`);

    app.listen(PORT_HTTP, () => {
        console.log(`Api rest corriendo en http://localhost:${PORT_HTTP}`);
    });

}).catch(err => {
    console.log(`Error conectado la BD en el puerto: ${MONGO_URI} Detalle: ${err}`);

});

