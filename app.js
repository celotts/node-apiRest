'use strict'

const express = require('express');

const bodyParser = require('body-parser');

const app = express();
const ProductConstrollers = require('./controllers/product');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.get('/api/product', ProductConstrollers.getProducts);
app.get('/api/product/:productId', ProductConstrollers.getProduct);
app.post('/api/product', ProductConstrollers.saveProduct);
app.put('/api/product/:productId', ProductConstrollers.updateProduct);
app.delete('/api/product/:productId', ProductConstrollers.deleteProduct);

module.exports = app;