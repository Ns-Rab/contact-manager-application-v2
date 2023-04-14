const mongoose = require('mongoose'); // Erase if already required  !mdbgum

// Declare the Schema of the Mongo model
var ContactsSchema = new mongoose.Schema({
    first_name:{
        type:String,
        required:true,
    },
    last_name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required:true,
    },
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true,

    },
   
}, {
    timestamps: true
});

//Export the model
module.exports = mongoose.model('Contaact', ContactsSchema);