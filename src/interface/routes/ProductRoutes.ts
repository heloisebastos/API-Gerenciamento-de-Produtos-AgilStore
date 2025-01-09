import { Router } from 'express';
import { ProductController } from '../controllers/ProductController';

const productController = new ProductController();

const router = Router();

router.post('/product', productController.addProduct);
router.get('/products', productController.getAllProducts);
router.patch('/product/:id', productController.updateProductPatch);
router.delete('/product/:id', productController.deleteProduct);
router.get('/product', productController.getProduct.bind(productController));
export default router;
