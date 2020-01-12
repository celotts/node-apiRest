'use strict'

const express = require('express');

const bodyParser = require('body-parser');

const mongoose = require('mongoose');

const Product = require('./models/product.ts')

const PORT_HTTP = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || 27017;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.get('/api/product', (req, res) => {
    res.send(200, { products: [] })
})

app.get('/api/product/:productId', (req, res) => {
    let productId = req.params.productId;
    console.log(productId);
    Product.findById(productId, (err, product) => {
        if (err) {
            return res.status(500).send({ message: `Error al realizar petición ${err}` })
        }
        if (!product) {
            return res.status(404).send({ message: `El producto solicitado no existe` })
        }
        res.status(200).send({ product })
    })
})

app.post('/api/product', (req, res) => {
    console.log(req.body);
    let product = new Product();
    product.name = req.body.name;
    product.picture = req.body.picture;
    product.price = req.body.price;
    product.category = req.body.category;
    product.description = req.body.description;

    product.save((err, productStore) => {
        if (err) {
            res.status(500).send({ message: `Error al salvar en la base de datos ${err}` })
        }

        res.status(200).send({ product: productStore });
    })
})

app.put('/api/product/:productId', (req, res) => {

})

app.delete('/api/product/:productId', (req, res) => {

})

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

