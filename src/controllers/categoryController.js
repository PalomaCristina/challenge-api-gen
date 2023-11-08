import Category from "../model/category.js";

// Rotas para CRUD de categorias
class CategogyController {

    //app.post('/categories', async (req, res) => {
    static createCategory = async (req, res) => {
        try {
            const category = new Category(req.body);
            await category.save();
            res.json(category);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao criar a categoria.', description: error });
        }
    };

//app.get('/categories', async (req, res) => {
static searchCategory = async (req, res) => {
    const categories = await Category.find();
    res.json(categories);
};
    // Rota para deletar uma categoria
        static deleteCategory = async (req, res) => {
            try {
                const categoryId = req.params.id;
                const deletedCategory = await Category.findByIdAndRemove(categoryId);
                if (!deletedCategory) {
                    res.status(404).json({ error: 'Categoria não encontrada.' });
                } else {
                    res.json({ message: 'Categoria deletada com sucesso.' });
                }
            } catch (error) {
                res.status(500).json({ error: 'Erro ao deletar a categoria.' });
            }
        };
    
        // Rota para atualizar uma categoria
        static putCategory = async (req, res) => {
            try {
                const categoryId = req.params.id;
                const updatedCategory = await Category.findByIdAndUpdate(categoryId, req.body, { new: true });
                if (!updatedCategory) {
                    res.status(404).json({ error: 'Categoria não encontrada.' });
                } else {
                    res.json(updatedCategory);
                }
            } catch (error) {
                res.status(500).json({ error: 'Erro ao atualizar a categoria.' });
            }
        };

}
export default CategogyController