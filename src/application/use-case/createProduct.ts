import { ProductRepository } from '../../domain/repositories/productRepository';
import { Product } from '../../domain/models/product';

export class CreateProduct {
    private productRepository: ProductRepository;

    constructor(productRepository: ProductRepository) {
        this.productRepository = productRepository;
    }

    async execute(product: Product): Promise<void> {
        await this.productRepository.addProduct(product);
    }
}
