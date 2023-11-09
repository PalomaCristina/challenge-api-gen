import express from "express";
import CategoryController from "../controllers/categoryController.js";

const router = express.Router();

router
    .get("/categories", CategoryController.searchCategory)
    .post("/categories/create", CategoryController.createCategory)
    .put("/categories/:id", CategoryController.putCategory)
    .delete("/categories/:id", CategoryController.deleteCategory);

export default router;   