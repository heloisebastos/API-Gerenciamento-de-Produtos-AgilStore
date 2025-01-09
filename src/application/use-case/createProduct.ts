import { ProductRepository } from "../../domain/repositories/productRepository";
import { Product } from "../../domain/models/product";

export class CreateProductUseCase {
    constructor(private productRepository: ProductRepository) { }

    async execute(product: Product): Promise<void> {
        product.validate();

        await this.productRepository.addProduct(product);
    }
}
