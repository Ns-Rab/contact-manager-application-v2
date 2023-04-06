// @define: get all products
// @define: api/products
// @privacy: protected
// @method: GET

const getAllProducts = async (req, res) => {
    res.json({message:"Get all products!"});
};

// @define: get single product
// @define: api/poducts
// @privacy: protected
// @method: GET
const getSingleProduct = async (req, res) => {
    res.json({message:"Get single product!"});
};

// @define: add product
// @define: api/poducts
// @privacy: protected
// @method: POST
const addProduct = async (req, res) => {
    res.json({message:"add product!"});
};

// @define: edit product
// @define: api/poducts
// @privacy: protected
// @method: PUT
const editProduct = async (req, res) =>{
    res.json({message:"edit product!"})
};


// @define: delete product
// @define: api/poducts
// @privacy: protected
// @method: DELETE
const deleteProduct = async (req, res) =>{
    res.json({message:"delete product!"})
};


module.exports = 
{getAllProducts,
getSingleProduct,
addProduct,
editProduct,
deleteProduct};