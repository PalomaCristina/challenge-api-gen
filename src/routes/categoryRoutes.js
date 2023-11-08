import express from "express";
import CategogyController from "../controllers/categoryController.js";

const router = express.Router();

router
    .get("/categories", CategogyController.searchCategory)
    .post("/categories/create/", CategogyController.createCategory)
    .put("/categories/:id", CategogyController.putCategory)
    .delete("/categories/:id", CategogyController.deleteCategory);

export default router;   