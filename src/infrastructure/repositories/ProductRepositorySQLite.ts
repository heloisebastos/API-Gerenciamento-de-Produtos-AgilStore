import { Product } from '../../domain/models/product';
import { ProductRepository } from '../../domain/repositories/productRepository';
import db from './sqliteDatabase';

export class SqliteProductRepository implements ProductRepository {
    async addProduct(product: Product): Promise<void> {
        return new Promise((resolve, reject) => {
            const query = `INSERT INTO products (name, category, quantity, price) VALUES (?, ?, ?, ?)`;
            db.run(query, [product.name, product.category, product.quantity, product.price], function (err) {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            });
        });
    }

    async getAllProducts(): Promise<Product[]> {
        return new Promise((resolve, reject) => {
            const query = `SELECT * FROM products`;
            db.all(query, [], (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows as Product[]);
                }
            });
        });
    }



}

