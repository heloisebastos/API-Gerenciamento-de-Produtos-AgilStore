import { Router } from 'express';
import { ProductController } from '../controllers/ProductController';

const productController = new ProductController();

const router = Router();

router.post('/product', productController.addProduct);
router.get('/products', productController.getAllProducts);
router.get('/productoptions', productController.getAllProducts);
router.put('/product/:id', productController.updateProduct);
router.patch('/product/:id', productController.updateProductPatch);

export default router;
