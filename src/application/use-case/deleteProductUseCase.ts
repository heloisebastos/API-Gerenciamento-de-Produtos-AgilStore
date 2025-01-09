import { ProductRepository } from '../../domain/repositories/productRepository';

export class DeleteProductUseCase {
    constructor(private productRepository: ProductRepository) { }
    async execute(id: number): Promise<void> {
        const product = await this.productRepository.findById(id); if (!product) {
            throw new Error('Produto não encontrado');
        }
        await this.productRepository.delete(id);
    }
}
