let getProduct = (id) => {
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

let getProducts = () => {
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

let updateProduct = (id) => {
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

let deleteProduct = (id) => {
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
    })+¿
}

exports = {
    getProduct,
    getProducts,
    updateProduct,
    deleteProduct
}