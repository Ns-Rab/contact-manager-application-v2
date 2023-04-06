const UserModel = require('../models/userModel');
const bcrypt = require("bcrypt");
// @define: register user
// @define: api/users/register
// @privacy: public
const registerUser = async (req, res) => {
    const {first_name, last_name, phone, email, password} = req.body;
    
    try {
        // check is email already exists
        const founder = await UserModel.find({email:email})

        // if user found
        if (foundUser) {
            res.status(400).json({message: "User already register"})
        }

        // if not found, create a new user
        const newUser = await UserModel.create({
            first_name:first_name,
            last_name: last_name,
            phone: phone,
            email: email,
            password: "",

        });

    } catch (error) {
        res.status(500);
        throw new Error(`Internal server error: ${error}`)
    }
    
    
    res.json({message: "User created!",
    data: req.body});
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