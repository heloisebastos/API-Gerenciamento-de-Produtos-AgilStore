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

    async findById(id: number): Promise<Product | null> { return new Promise((resolve, reject) => { const query = `SELECT * FROM products WHERE id = ?`; db.get(query, [id], (err, row) => { if (err) { reject(err); } else { resolve(row as Product || null); } }); }); } async updateProduct(id: number, updatedData: Partial<Product>): Promise<void> { return new Promise((resolve, reject) => { const columns = Object.keys(updatedData).map(key => `${key} = ?`).join(', '); const values = Object.values(updatedData); const query = `UPDATE products SET ${columns} WHERE id = ?`; db.run(query, [...values, id], function (err) { if (err) { reject(err); } else { resolve(); } }); }); }

    async delete(id: number): Promise<void> { return new Promise((resolve, reject) => { const query = `DELETE FROM products WHERE id = ?`; db.run(query, [id], function (err) { if (err) { reject(err); } else { resolve(); } }); }); }


}

