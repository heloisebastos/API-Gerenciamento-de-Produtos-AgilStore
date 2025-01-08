import { Router } from 'express';
import { SqliteProductRepository } from '../infrastructure/database/ProductRepository';
import { CreateProduct } from '../application/use-case/createProduct';

const productRoutes = Router();
const productRepository = new SqliteProductRepository();
const createProductUseCase = new CreateProduct(productRepository);

productRoutes.post('/products', async (req, res) => {
    const { name, category, quantity, price } = req.body;
    const product = { id: 0, name, category, quantity, price };

    try {
        await createProductUseCase.execute(product);
        res.status(201).send('Produto adicionado com sucesso');
    } catch (err) {
        res.status(500).send('Erro ao adicionar produto');
    }
});

productRoutes.get('/products', async (req, res) => {
    try {
        const products = await productRepository.getAllProducts();
        res.status(200).json(products);
    } catch (err) {
        res.status(500).send('Erro ao listar produtos');
    }
});

export default productRoutes;
