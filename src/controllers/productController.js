import Product from "../model/productSchema.js";
import Category from "../model/categorySchema.js";
// Rotas para CRUD de produtos

class ProductController {
    static createProducts = async (req, res) => {
        try {
            const product = new Product(req.body);
            await product.save();
            res.json(product);
        } catch (error) {
            res.status(500).json({ error: 'Error on product creation' });
        }
    }

    static searchProducts = async (req, res) => {
        const products = await Product.find();
        res.json(products);
    };

    // Rota para calcular o valor das parcelas do produto
    static simulationPlots = async (req, res) => {
        const productId = req.params.id;
        const product = await Product.findById(productId);
        if (!product) {
            res.status(404).json({ error: 'Product not found'});
        } else {
            const { numberOfInstallments } = req.body;
            // Obtenha a categoria associada ao produto
            const category = await Category.findById(product.category);
            if (!category) {
                res.status(404).json({ error: 'Category not found' });
            } else {
                const interestRate = category.interestRate;
                const i = interestRate / 100;
                console.log(`simulationPlots - interestRate: ${i}`);
                const n = numberOfInstallments;
                console.log(`simulationPlots - numberOfInstallments: ${n}`);
                console.log(`simulationPlots - product.price: ${product.price}`);
                const installmentValue = (product.price * i) / (1 - Math.pow(1 + i, -n));
                res.json({ installmentValue });
            }
        }
    };

    // Rota para deletar um produto
    //app.delete('/products/:id', async (req, res) => {
    static deleteProduct = async (req, res) => {
        try {
            const productId = req.params.id;
            const deletedProduct = await Product.findByIdAndRemove(productId);
            if (!deletedProduct) {
                res.status(404).json({ error: 'Produto não encontrado.' });
            } else {
                res.json({ message: 'Produto deletado com sucesso.' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Erro ao deletar o produto.' });
        }
    };

    // Rota para atualizar um produto
    //app.put('/products/:id', async (req, res) => {
    static putProduct = async (req, res) => {
        try {
            const productId = req.params.id;
            const updatedProduct = await Product.findByIdAndUpdate(productId, req.body, { new: true });
            if (!updatedProduct) {
                res.status(404).json({ error: 'Produto não encontrado.' });
            } else {
                res.json(updatedProduct);
            }
        } catch (error) {
            res.status(500).json({ error: 'Erro ao atualizar o produto.' });
        }
    };

}
export default ProductController;