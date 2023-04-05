const express = require(`express`);
const contactsRoute = express.Router();
const {getAllContacts, addContact, editContact, getSingleContact, deleteContact} = require("../controllers/contactsController");



// @define:get all contacts
// @define: api/contacts/get all contacts
// @privacy: protected
contactsRoute.get('/', getAllContacts );


// @define:get single contact
// @route: api/contacts/:id
// @privacy: protected
contactsRoute.get('/:id', getSingleContact);


// @define:add contact
// @route: api/contacts
// @privacy: protected
contactsRoute.post('/', addContact);

    
// @define:edit contact
// @route: api/contacts/:id
// @privacy: protected
contactsRoute.put('/:id', editContact );


// @define:delete contact
// @route: api/contacts/:id
// @privacy: protected
contactsRoute.delete('/:id', deleteContact );




module.exports = contactsRoute;