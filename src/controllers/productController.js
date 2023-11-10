import Product from "../model/productSchema.js";
import Category from "../model/categorySchema.js";

class ProductController {
    static createProducts = async (req, res) => {
        try {
            const product = new Product(req.body);
            await product.save();
            res.status(201).json({success:true, product});
        } catch (error) {
            res.status(500).json({ error: 'Error on product creation' });
        }
    }

    static searchProducts = async (req, res) => {
        const products = await Product.find();
        res.json(products);
    };

    // Calculate the installments 
    static simulationPlots = async (req, res) => {
        const productId = req.params.id;
        const product = await Product.findById(productId);
        if (!product) {
            res.status(404).json({ error: 'Product not found'});
        } else {
            const { numberOfInstallments } = req.body;
            // get the category associate to your product
            const category = await Category.findById(product.category);
            if (!category) {
                res.status(404).json({ error: 'Category not found' });
            } else {
                const interestRate = category.interestRate;
                const i = interestRate / 100;
                const n = numberOfInstallments;
                console.log(`simulationPlots - interestRate: ${i}`);
                console.log(`simulationPlots - numberOfInstallments: ${n}`);
                console.log(`simulationPlots - product.price: ${product.price}`);
                const installmentValue2 = (product.price * i) / (1 - Math.pow(1 + i, -n));
                const installmentValue = installmentValue2.toFixed(2);
                console.log(`simulationPlots - installmentValue: ${installmentValue}`);
                res.json({success:true, product, interestRate, numberOfInstallments, installmentValue});
            }
        }
    };

    static deleteProduct = async (req, res) => {
        try {
            const productId = req.params.id;
            const deletedProduct = await Product.findByIdAndDelete(productId);
            if (!deletedProduct) {
                res.status(404).json({ error: 'Product not found.' });
            } else {
                res.status(201).json({success:true, message: 'Product deleted with success.' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Error to delete product.', description: error  });
        }
    };

    //route for update an product
    static putProduct = async (req, res) => {
        try {
            const productId = req.params.id;
            const updatedProduct = await Product.findByIdAndUpdate(productId, req.body, { new: true });
            if (!updatedProduct) {
                res.status(404).json({ error: 'Product not found.' });
            } else {
                res.status(201).json({success: true, updatedProduct});
            }
        } catch (error) {
            res.status(500).json({ error: 'Error to update product.', description: error });
        }
    };

}
export default ProductController;