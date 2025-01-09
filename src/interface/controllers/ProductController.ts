import { Request, Response } from 'express';
import { CreateProductUseCase } from '../../application/use-case/createProduct';
import { Product } from '../../domain/models/product';
import { SqliteProductRepository } from '../../infrastructure/repositories/ProductRepositorySQLite';
import { UpdateProductUseCase } from '../../application/use-case/updateProduct';
import { DeleteProductUseCase } from '../../application/use-case/deleteProductUseCase'
import { FindProductUseCase } from '../../application/use-case/findProductUseCase';

const productRepository = new SqliteProductRepository;
const createProduct = new CreateProductUseCase(productRepository);
const updateProduct = new UpdateProductUseCase(productRepository);
const deleteProduct = new DeleteProductUseCase(productRepository);
const findProduct = new FindProductUseCase(productRepository);
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

    async updateProduct(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params; const updatedData = req.body;
            await updateProduct.execute(Number(id), updatedData);
            res.status(200).send('Produto atualizado com sucesso!');
        }
        catch (error) {
            if (error instanceof Error) {
                res.status(404).send('Erro ao atualizar produto: ' + error.message);
            }
            else {
                res.status(400).send('Erro desconhecido');

            }
        }
    }

    async updateProductPatch(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params; const updatedData = req.body; await updateProduct.execute(Number(id), updatedData);
            res.status(200).send('Produto atualizado parcialmente com sucesso!');
        }
        catch (error) {
            if (error instanceof Error) {
                res.status(404).send('Erro ao atualizar produto: ' + error.message);
            }
            else {
                res.status(400).send('Erro desconhecido');

            }
        }
    }
    async deleteProduct(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params; await deleteProduct.execute(Number(id)); res.status(200).send('Produto excluído com sucesso!');
        } catch (error) {
            if (error instanceof Error) {
                res.status(404).send('Erro ao excluir produto: ' + error.message);
            } else {
                res.status(400).send('Erro desconhecido');
            }
        }
    }

    async getProduct(req: Request, res: Response): Promise<void> { try { const { id, name } = req.query; if (!id && !name) { res.status(400).send('Por favor, forneça um ID ou um nome para a busca'); return; } const query = { id: id ? Number(id) : undefined, name: name ? String(name) : undefined, }; const result = await findProduct.execute(query); res.status(200).json(result); } catch (error) { if (error instanceof Error) { res.status(404).send('Erro ao buscar produto: ' + error.message); } else { res.status(400).send('Erro desconhecido'); } } }
}