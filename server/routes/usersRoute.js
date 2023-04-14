const express = require('express');
const usersRoute = express.Router();

//importing usersController
const {registerUser, loginUser, getAllUsers, getSingleUser, updateSingleUser, deleteSingleUser} = require("../controllers/usersController");

const isAuth = require("../middlewares/isAuth");

// @define: register user
// @define: api/users/register
// @privacy: public
usersRoute.post('/register', registerUser);


// @define: login user
// @define: api/users/login
// @privacy: public
usersRoute.post('/login', loginUser);


// @define: all users
// @define: api/users
// @privacy: protected
usersRoute.get('/', isAuth, getAllUsers );


// @define: get single user profile
// @define: api/users/:id
// @privacy: protected
usersRoute.get('/:id',isAuth, getSingleUser);

// @define: update single user
// @define: api/users/:id
// @privacy: protected
usersRoute.put('/:id', isAuth, updateSingleUser);

// @define: delete single user
// @define: api/users/:id
// @privacy: protected
usersRoute.delete('/:id', isAuth, deleteSingleUser);


// usersRoute.delete('/:id', (req, res) => {
//     res.json({message: "delete single user!"});
// });

module.exports = usersRoute;