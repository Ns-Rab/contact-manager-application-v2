const express = require("express");
const productsRoute = express.Router();


//importing productsController
const { getAllProducts, getSingleProduct, addProduct, editProduct, deleteProduct } = require("../controllers/productsController");



// @define: get all products
// @define: api/poducts
// @privacy: protected
// @method: GET
productsRoute.get("/", getAllProducts);


// @define: get single product
// @define: api/poducts
// @privacy: protected
// @method: GET
productsRoute.get("/:id", getSingleProduct);

// @define: add product
// @define: api/poducts
// @privacy: protected
// @method: POST
productsRoute.post("/", addProduct);


// @define: edit product
// @define: api/poducts
// @privacy: protected
// @method: PUT
productsRoute.put("/", editProduct);


// @define: delete product
// @define: api/poducts
// @privacy: protected
// @method: DELETE
productsRoute.delete("/", deleteProduct);




module.exports = productsRoute;