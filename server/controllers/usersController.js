const UserModel = require('../models/userModel');
const bcrypt = require("bcrypt");
// @define: register user
// @define: api/users/register
// @privacy: public
const registerUser = async (req, res) => {
    const {first_name, last_name, phone, email, password} = req.body;
    
    try {
        // check is email already exists
        const foundUser = await UserModel.find({email:email})
        // console.log(foundUser);

        // if user is found
        if (!foundUser) {
            res.status(400).json({message: "User already register"});
            return;
        }


        // creat a salt
        const salt = 10;


        // hash password
        const hashedPassword = await bcrypt.hash(password, salt);


        // if not found, create a new user
        const newUser = await UserModel.create({
            first_name:first_name,
            last_name: last_name,
            phone: phone,
            email: email,
            password: hashedPassword,

        });

        // if user was not created successfully
        if (!newUser) {
            res.status(400).json({ message: "Unble to create user"});
            
        }

        // response to front-end
        res
        .status(201).json({
            message: "User created successfully!", data: newUser});

    

    } catch (error) {
        res.status(500).json({message: error.message});
        throw new Error(`Internal server error: ${error}`)
    }
    
    
    
};

// @define: login user
// @define: api/users/login
// @privacy: public
const loginUser = async (req, res) => {
    // destructure email and password from req body
    const { email, password } = req.body;

    try {
    // check if email exists
    const foundEmail = await UserModel.find({email: email});
    
    const checkPassword = await bcrypt.compare(password, foundEmail.password);
    console.log(checkPassword);

    //check if passwords match

    // if (foundEmail && !(await bcrypt.compare(password, foundEmail.password))){

    //     res.status(400).json({message: "Invalid credentials"})
    // }


    // if login details are correct
    res.json({
        message: "User loggedIn", 
        data: foundEmail
    });
    
    } catch (error) {
        res.status(500).json({message:error.message}); 
    }
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