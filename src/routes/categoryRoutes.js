import express from "express";
import CategogyController from "../controllers/categoryController";

const router = express.Router();

router
    .get("/categories", CategogyController.searchCategory)
    .post("/create/category", CategogyController.createCategory)
    .put("/category/:id", CategogyController.atualizarAutor)
    .delete("/category/:id", CategogyController.excluirAutor);

export default router;   