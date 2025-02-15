
const UserModel = require('../models/userModel');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// @define: register user
// @define: api/users/register
// @privacy: public
const registerUser = async (req, res) => {
    const {first_name, last_name, email, password} = req.body;
    
    try {
        // check is email already exists
        const foundUser = await UserModel.findOne({email: email.toLowerCase()});
        // console.log(foundUser);

        // if user is found
        if (foundUser) {
            res.status(400).send({message: "User already register"});
            return;
        }


        // creat a salt
        const salt = await bcrypt.genSalt(10);


        // hash password
        const hashedPassword = await bcrypt.hash(password, salt);


        // if not found, create a new user
        const newUser = await UserModel.create({
            first_name:first_name,
            last_name: last_name,
            email: email.toLowerCase(),
            password: hashedPassword,

        });

        // if user was not created successfully
        if (!newUser) {
            res.status(400).json({ message: "Unble to create user"});
            return;
            
        }

        // Send confirmation email to user



        // response to front-end
        res
        .status(201).json({
            message: "User created successfully!", data: newUser
        });

    

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
    // check if email or password empty
    if (!email || !password) {
        res.status(400).json({message: "All fields are required"});
        return;
    }


    // check if email exists
    const foundEmail = await UserModel.findOne({email: email.toLowerCase()});
    
    //check if passwords match

    if (!foundEmail || !(await bcrypt.compare(password, foundEmail.password))){

        res.status(400).json({message: "Invalid credentials"})
        return;
    }


    // if login details are correct

    // create a token
    const token = jwt.sign({id:foundEmail._id}, process.env.LOGIN_SECRET, {expiresIn: "1d"});

    
    req.session.save((err) => {
        if (err) {
            res.status(500).json({message: err.message});
            return;
        } else {
            //sending token back to front-end
            res.status(200).json({token: token});
        }

    });
    
    } catch (error) {
        res.status(500).json({message:error.message}); 
        return;
    }
};

// @define: all users
// @define: api/users
// @privacy: protected
const getAllUsers = async (req, res) => {
    try {
        // console.log(req.user.id);
        // if req.user.id is present
        if (!req.user.id) {

            res.status(401).send({message: "Unauthorized access"});
            return;
        };

        //fetch all users from db
        const allUsers = await UserModel.find();
        //send data to frontend
        res.send(allUsers);
    } catch (error) {
        res.status(500).json({message:error.message}); 
        return;
    }
};

// @define: get single user
// @define: api/users/:id
// @privacy: protected
const getSingleUser = async (req, res) => {
    //get id from params||destructure
    const {id} = req.params;
    try {
        // fetch single user from database
        const singleUser = await UserModel.findById(id);
        
        //return single user to frontend
        res.send(singleUser);
        
    } catch (error) {
        res.status(500).json({message:error.message}); 
        return;
    }

};


const updateSingleUser = async (req, res) => {
    //get id from params||destructure
    const {id} = req.params;
    const {first_name, last_name, phone} = req.body;

    try {
    // check if user exist
        const userExists = await UserModel.findById(id);
    
    //if user doesn't exist
    if (!userExists) {
        res.status(404).send("User not found");
        return;
    }

        // console.log(`the value is : ${req.body?.first_name}`);
    //update user details here
    const updatedUser = await UserModel.findByIdAndUpdate(id, {
        first_name:req.body?.first_name,
        last_name: req.body?.last_name,
        phone:req.body?.phone
    }, { new: true });
    
    //return updated user to frontend
        res.send(updatedUser);
        
    } catch (error) {
        res.status(500).json({message:error.message}); 
        return;
    }
};

// @define: delete single user
// @define: api/users/:id
// @privacy: protected
const deleteSingleUser = async (req, res) => {
    //get id from params||destructure
    const {id} = req.params;
    const {first_name, last_name, phone} = req.body;

    try {
    // check if user exist
        const userExists = await UserModel.findById(id);
    
    //if user doesn't exist
    if (!userExists) {
        res.status(404).send("User not found");
        return;
    }

    
    //delet user here
    const deletedUser = await UserModel.findByIdAndDelete(id);

    
    //return deleted user to frontend
        res.send(deletedUser);
        
    } catch (error) {
        res.status(500).json({message:error.message}); 
        return;
    }
};





module.exports = {registerUser, loginUser, getAllUsers, getSingleUser, updateSingleUser,deleteSingleUser};