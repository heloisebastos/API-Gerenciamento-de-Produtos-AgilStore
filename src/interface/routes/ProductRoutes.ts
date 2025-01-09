import { Router } from 'express';
import { ProductController } from '../controllers/ProductController';

const productController = new ProductController();

const router = Router();

router.post('/product', productController.addProduct);
router.get('/products', productController.getAllProducts);
router.get('/productoptions', productController.getAllProducts);


export default router;
