import Category from "../model/categorySchema.js";

// Rotas para CRUD de categorias
class CategoryController {
    static createCategory = async (req, res) => {
        try {
            const category = new Category(req.body);
            await category.save();
            res.json(category.toJSON());
        } catch (error) {
            res.status(500).json({ error: 'Erro ao criar a categoria.', description: error });
        }
    };


    static searchCategory = async (req, res) => {
        const categories = await Category.find();
        res.json(categories);
    };
    // Rota para deletar uma categoria
    static deleteCategory = async (req, res) => {
        try {
            const categoryId = req.params.id;
            const deletedCategory = await Category.findByIdAndDelete(categoryId);
            if (!deletedCategory) {
                res.status(404).json({ error: 'Category not found' });
            } else {
                res.status(200).json({ success: true, message: 'Category deleted with success'});
            }
        } catch (error) {
            console.log('erro: ',error)
            res.status(500).json({ error: 'Error deleting category.', description: error });
        }
    };

    // Rota para atualizar uma categoria
    static putCategory = async (req, res) => {
        try {
            const categoryId = req.params.id;
            const updatedCategory = await Category.findByIdAndUpdate(categoryId, req.body, { new: true });
            if (!updatedCategory) {
                res.status(404).json({ error: 'Category not found', description: error });
            } else {
                res.json(updatedCategory);
            }
        } catch (error) {
            res.status(500).json({ error: 'Error updating category', description: error });
        }
    };

}
export default CategoryController