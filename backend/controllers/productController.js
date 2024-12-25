const productModel = require("../models/productModel");

exports.getProducts = async (req, res, next) => {
  const Products = await productModel.find({});
  res.json({
    success: true,
    Products,
  });
};

exports.getSingleProduct = async (req, res, next) => {
  try {
    console.log(req.params.id);
    const product = await productModel.findById(req.params.id);
    res.json({
      success: true,
      product,
    });
  } catch (error) {
    res.status(404).json({
        success: false,
        message: error.message
      });
  }
};
