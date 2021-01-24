import express from 'express';
import Product from '../models/productModel.js';
import asyncHandler from 'express-async-handler';
//using async handler instead of a try-catch block
const router = express.Router();

//@desc     Fetch all the products
//@route    GET /api/products
//@access   Public
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  })
);

//@desc     Fetch single product by ID
//@route    GET /api/products/:id
//@access   Public
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
      res.json(product);
    } else {
      res.status(404);
      throw new Error('Product Not Found');
    }
  })
);

export default router;
