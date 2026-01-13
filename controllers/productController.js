import product from '../models/product.js';
import ProductModel from '../models/product.js'

const ProductCreate = async (req, res) => {
  try {

    const { name, price, image, description, category } = req.body;
    if (!name || !price || !image || !description || !category) {
      res.status(303).json({ success: false, message: 'All fields are required' })
    }
    const createdProduct = new ProductModel({
      name,
      price,
      image, description,
      category
    })
    createdProduct.save();
    return res.status(400).json({ success: true, message: "Product created Successfully", product: createdProduct })


  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: "Internal Server Error" })

  }
}

//   get products 

const readProducts = async (req, res) => {
  try {

    const id = req.params._id;
    const products = await ProductModel.find({ id });
    if (!products) {
      return res.status(404).json({ success: false, message: 'No User Found' })
    }
    return res.status(200).json({ success: true, products: products })

  } catch (error) {
    return res.status(500).json({ success: false, message: 'Internal Server Error ' })

  }
}

// single product read 

const singleProduct = async (req, res) => {
  try {
    const product = await ProductModel.findById(req.params.id);
    res.json({ success: true, data: product });
  } catch (error) {
    res.status(404).json({ message: "Product not found" });
  }
};



//   Update Product 
const UpdateProduct = async (req, res) => {
  try {
    const ProductId = req.params.id;

    const { name, price, image, description, category } = req.body;
    const FindProduct = await ProductModel.findById({ _id: ProductId })
    if (!FindProduct) {
      return res.status(404).json({ success: false, message: "No product found" })
    }
    const updatedProduct = await ProductModel.findByIdAndUpdate(
      { _id: ProductId },
      { name, price, image, description, category }, { new: true }
    )

    return res.status(200).json({ success: true, message: "Product Update Succesfully", product: updatedProduct })

  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: `Internal Server Error ${error}` })
  }


}

// Delete Product

const ProductDelete = async (req, res) => {
  try {
    const ProductId = req.params.id;

    const FindProduct = await ProductModel.findById({ _id: ProductId });
    if (!FindProduct) {
      return res.status(404).json({ success: false, message: "No Product Found" })
    }
    const DeletedProduct = await ProductModel.findOneAndDelete({ _id: ProductId })
    return res.status(200).json({ success: true, message: "Product deleted successfully", Product: DeletedProduct })

  } catch (error) {
    return res.status(500).json({ success: false, message: 'Internal Server Error' })
  }

}

// for adding multiple  product once
const createProducts = async (req, res) => {
  try {
    const products = req.body;

    // Check if body is array
    if (!Array.isArray(products)) {
      return res.status(400).json({
        success: false,
        message: "Expected an array of products",
      });
    }

    const savedProducts = await ProductModel.insertMany(products);

    res.status(201).json({
      success: true,
      message: "Products inserted successfully",
      total: savedProducts.length,
      data: savedProducts,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error inserting products",
      error: error.message,
    });
  }
};

// Get all products with optional category filter
const getAllProducts = async (req, res) => {
  try {
    const { category } = req.query;

    let query = {};
    if (category) {
      query.category = category;
    }

    const products = await ProductModel.find(query);

    res.status(200).json({
      success: true,
      total: products.length,
      data: products,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching products",
      error: error.message,
    });
  }
};


export { ProductCreate, singleProduct, UpdateProduct, readProducts, ProductDelete, createProducts, getAllProducts }