'use strict'

const express = require('express');

const bodyParser = require('body-parser');

const PORT_HTTP = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.get('/api/product', (req, res) => {
    res.send(200, { products: [] })
})

app.get('/api/product/: productId', (req, res) => {

})

app.post('/api/product', (req, res) => {
    console.log(req.body);
    res.status(200).send({ message: 'el producto se ha recibido' });
})

app.put('/api/product/:productId', (req, res) => {

})

app.delete('/api/product/:productId', (req, res) => {

})
app.listen(PORT_HTTP, () => {
    console.log(`Api rest corriendo en http://localhost:${PORT_HTTP}`);
})