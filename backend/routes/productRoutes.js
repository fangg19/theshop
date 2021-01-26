import express from 'express';
import {
  getProductById,
  getProducts,
} from '../controllers/productController.js';

const router = express.Router();

router.route('/').get(getProducts);

//@desc     Fetch single product by ID
//@route    GET /api/products/:id
//@access   Public
router.route('/:id').get(getProductById);

export default router;
