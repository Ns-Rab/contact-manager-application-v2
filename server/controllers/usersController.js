// @define: register user
// @define: api/users/register
// @privacy: public
const registerUser = async (req, res) => {
    res.json({message: "User created!"});
};

// @define: login user
// @define: api/users/login
// @privacy: public
const loginUser = async (req, res) => {
    res.json({message: "User loggedIn!"});
};

// @define: all users
// @define: api/users
// @privacy: protected
const getAllUsers = async (req, res) => {
    res.json({message: "get All users!"});
};

// @define: get single user
// @define: api/users/:id
// @privacy: protected
const getSingleUser = async (req, res) => {
    res.json({message: "get single user!"});
};


const updateSingleUser = async (req, res) => {
    res.json({message: "update single user!"});
};

// @define: delete single user
// @define: api/users/:id
// @privacy: protected
const deleteSingleUser = async (req, res) => {
    res.json({message: "delete single user!"});
};

module.exports = {registerUser, loginUser, getAllUsers, getSingleUser, updateSingleUser,deleteSingleUser};