import { Product } from '../models/product';

export interface ProductRepository {
    addProduct(product: Product): Promise<void>;
    getAllProducts(): Promise<Product[]>;
}
