import Category from "../model/category";

// Rotas para CRUD de categorias
class CategogyController {

    static createCategory = async (req, res) => {
        try {
            const category = new Category(req.body);
            await category.save();
            res.json(category);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao criar a categoria.' });
        }
    };

static searchCategory = async (req, res) => {
    const categories = await Category.find();
    res.json(categories);
};

}
export default CategogyController;