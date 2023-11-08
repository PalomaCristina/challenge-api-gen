import express from "express";
import categories from "./categoryRoutes.js";
import products from "./productsRoutes.js";

const routes = (app) => {
    app.use(
        express.json(),
        categories,
        products
    );
};

export default routes;