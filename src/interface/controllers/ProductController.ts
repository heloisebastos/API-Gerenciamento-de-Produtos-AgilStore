import { Request, Response } from 'express';
import { CreateProduct } from '../../application/use-case/CreateProduct';
import { Product } from '../../domain/models/product';
import { SqliteProductRepository } from '../../infrastructure/repositories/ProductRepositorySQLite';
const productRepository = new SqliteProductRepository;
const createProduct = new CreateProduct(productRepository);


export class ProductController {
    async addProduct(req: Request, res: Response): Promise<void> {
        try {
            const { name, category, quantity, price } = req.body;
            const product = new Product('', name, category, quantity, price);

            await createProduct.execute(product);
            res.status(201).send('Produto adicionado com sucesso!');
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).send(error.message);
            } else {
                res.status(400).send('Erro desconhecido');
            }
        }
    }

    async getAllProducts(req: Request, res: Response): Promise<void> {
        try {
            const products = await productRepository.getAllProducts();
            res.status(200).json(products);
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).send('Erro ao obter produtos: ' + error.message);
            } else {
                res.status(400).send('Erro desconhecido');
            }
        }
    }



}