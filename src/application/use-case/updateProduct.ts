import { ProductRepository } from '../../domain/repositories/productRepository';
import { Product } from '../../domain/models/product';

export class UpdateProductUseCase {
    constructor(private productRepository: ProductRepository) { }

    async execute(id: number, updatedData: Partial<Product>): Promise<void> {
        const product = await this.productRepository.findById(id);
        if (!product) {
            throw new Error('Produto não encontrado');
        }

        const updatedProduct = { ...product, ...updatedData };

        const productToValidate = new Product(
            product.id,
            updatedProduct.name || product.name,
            updatedProduct.category || product.category,
            updatedProduct.quantity !== undefined ? updatedProduct.quantity : product.quantity,
            updatedProduct.price !== undefined ? updatedProduct.price : product.price
        );

        productToValidate.validate();

        await this.productRepository.updateProduct(id, updatedProduct);
    }
}
