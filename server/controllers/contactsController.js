// @define: all contacts
// @define: api/contacts
// @privacy: protected
const getAllContacts = async (req, res) => {
    res.json({message: "get all contacts!"});
};


// @define:get single contact
// @define: api/contacts/get single  contacts
// @privacy: public
const getSingleContact = async (req, res) => {
    res.json({message: "get single user!"});
};


// @define:add contact
// @define: api/contacts/add  contact
// @privacy: public
const addContact = async (req, res) => {
    res.json({message: "add contact!"});
};

// @define:edit contact
// @define: api/contacts/edit  contact
// @privacy: public
const editContact =async (req, res) => {
    res.json({message: "edit contact!"});
};

// @define:delete contact
// @define: api/contacts/delete  contact
// @privacy: public
const deleteContact =async (req, res) => {
    res.json({message: "delete contact!"});
};


module.exports = 
    {getAllContacts, 
    getSingleContact, 
    addContact, 
    editContact, 
    deleteContact};