import { ProductRepository } from "../../domain/repositories/productRepository";
import { Product } from "../../domain/models/product";

export class FindProductUseCase {
    constructor(private productRepository: ProductRepository) { }

    async execute(query: { id?: number; name?: string }): Promise<Product | Product[]> {
        if (query.id !== undefined) {
            const product = await this.productRepository.findById(query.id);
            if (!product) {
                throw new Error('Produto não encontrado');
            }
            return product;
        } else if (query.name !== undefined) {
            const products = await this.productRepository.findByPartialName(query.name);
            if (products.length === 0) {
                throw new Error('Produto(s) não encontrado(s)');
            }
            return products;
        } else {
            throw new Error('Parâmetro de busca não informado');
        }
    }
}
