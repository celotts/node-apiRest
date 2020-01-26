'use strict'
//C:\cursos Angular Node\node-apiRest\models\product.ts
const Product = require('../models/product');

let getProduct = (req, res) => {
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
}

let getProducts = (req, res) => {
    Product.find({}, (err, products) => {
        if (err) {
            return res.status(500).send({ message: `Error al realizar petición ${err}` })

        }

        if (!products) {
            return res.status(404).send({ message: `El producto solicitado no existe` })
        }

        res.status(200).send({ products })
    })
}

let saveProduct = (req, res) => {
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
}
let updateProduct = (req, res) => {
    // update
    let productId = req.params.productId;
    let updated = req.body;
    Product.findByIdAndUpdate(productId, updated, (err, productUpdated) => {
        if (err) {
            return res.status(500).send({ message: `Error al actualizar el producto ${err}` })
        }
        res.status(200).send({ product: productUpdated })
    })
}

let deleteProduct = (req, res) => {
    let productId = req.params.productId;
    Product.findById(productId, (err, product) => {
        if (err) {
            return res.status(500).send({ message: `Error al borrar el producto ${err}` })
        }
        product.remove(err => {
            if (err) {
                return res.status(500).send({ message: `Error al borrar el producto ${err}` })
            }
        })

        res.status(200).send({ message: 'El producto ha sido eliminado' })
    })
}

module.exports = {
    getProduct,
    getProducts,
    saveProduct,
    updateProduct,
    deleteProduct
}