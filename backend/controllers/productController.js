import Product from '../models/productModel.js';
import asyncHandler from 'express-async-handler';
//using async handler instead of a try-catch block

//@desc     Fetch all the products
//@route    GET /api/products
//@access   Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

//@desc     Fetch single product by ID
//@route    GET /api/products/:id
//@access   Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error('Product Not Found');
  }
});

//@desc     Delete single product by ID
//@route    DELETE /api/products/:id
//@access   Pivate/Admin
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    await product.remove();
    res.json({ message: 'Product removed successfully' });
  } else {
    res.status(404);
    throw new Error('Product Not Found');
  }
});

export { getProductById, getProducts, deleteProduct };
