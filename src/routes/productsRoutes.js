import express from "express";

import ProductController from "../controllers/productController.js";

const productRouter = express.Router()

productRouter 
    .get('/products', ProductController.searchProducts)
    .get('/products/plots/:id', ProductController.simulationPlots)
    .post('/products/create', ProductController.createProducts)
    .put('/products/:id', ProductController.putProduct)
    .delete('/products/delete/:id', ProductController.deleteProduct)

    export default productRouter;