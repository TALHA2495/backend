import express from "express"
import { ProductCreate, singleProduct, UpdateProduct, readProducts, ProductDelete, createProducts, getAllProducts } from '../controllers/productController.js'

const ProductRoutes = express.Router();

ProductRoutes.post('/create', ProductCreate);
//single product read
ProductRoutes.get('/singleProduct/:id', singleProduct)

// Get all products
ProductRoutes.get('/all', getAllProducts);

ProductRoutes.get('/readProducts/:id', readProducts);
ProductRoutes.put('/update/:id', UpdateProduct);
ProductRoutes.delete('/delete/:id', ProductDelete);

ProductRoutes.post("/", createProducts);

export default ProductRoutes;