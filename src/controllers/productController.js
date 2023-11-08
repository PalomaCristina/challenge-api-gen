import Product from "../model/product";
// Rotas para CRUD de produtos

class ProductController {
//app.post('/products', async (req, res) => {
static createProducts = async (req, res) => {
    try {
        const product = new Product(req.body);
        await product.save();
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: 'Error on product creation' });
    }
}

//app.get('/products', async (req, res) => {
static searchProducts = async (req, res) => {
const products = await Product.find();
    res.json(products);
};

// Rota para calcular o valor das parcelas do produto
//app.get('/products/:id/calculate', async (req, res) => {
static installments = async (req, res) => {
const productId = req.params.id;
    const product = await Product.findById(productId);
    if (!product) {
        res.status(404).json({ error: 'Product not found' });
    } else {
        const { price, interestRate, numberOfInstallments } = req.body;
        const i = interestRate / 100;
        const n = numberOfInstallments;
        const installmentValue = (price * i) / (1 - Math.pow(1 + i, -n));
        res.json({ installmentValue });
    }
};
}
export default ProductController;