const express = require('express');
const usersRoute = express.Router();

//importing usersController
const {registerUser, loginUser, getAllUsers, getSingleUser, updateSingleUser, deleteSingleUser} = require("../controllers/usersController");

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
usersRoute.get('/', getAllUsers );


// @define: get single user
// @define: api/users/:id
// @privacy: protected
usersRoute.get('/:id', getSingleUser);

// @define: update single user
// @define: api/users/:id
// @privacy: protected
usersRoute.put('/:id', updateSingleUser);

// @define: delete single user
// @define: api/users/:id
// @privacy: protected
usersRoute.delete('/:id', deleteSingleUser);


// usersRoute.delete('/:id', (req, res) => {
//     res.json({message: "delete single user!"});
// });

module.exports = usersRoute;