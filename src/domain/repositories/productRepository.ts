import { Product } from '../models/product';

export interface ProductRepository {
    addProduct(product: Product): Promise<void>;
    getAllProducts(): Promise<Product[]>;
    findById(id: number): Promise<Product | null>; updateProduct(id: number, updatedData: Partial<Product>): Promise<void>;
    delete(id: number): Promise<void>;

}
