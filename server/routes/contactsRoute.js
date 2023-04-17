const express = require(`express`);
const contactsRoute = express.Router();
const {getAllContacts, addContact, editContact, getSingleContact, deleteContact} = require("../controllers/contactsController");
const isAuth = require("../middlewares/isAuth");


// @define:get all contacts
// @define: api/contacts/get all contacts
// @privacy: protected
contactsRoute.get('/', isAuth, getAllContacts );


// @define:get single contact
// @route: api/contacts/:id
// @privacy: protected
contactsRoute.get('/:id', isAuth,  getSingleContact);


// @define:add contact
// @route: api/contacts
// @privacy: protected
contactsRoute.post('/', isAuth,  addContact);

    
// @define:edit contact
// @route: api/contacts/:id
// @privacy: protected
contactsRoute.put('/:id', isAuth, editContact );


// @define:delete contact
// @route: api/contacts/:id
// @privacy: protected
contactsRoute.delete('/:id', isAuth, deleteContact );




module.exports = contactsRoute;