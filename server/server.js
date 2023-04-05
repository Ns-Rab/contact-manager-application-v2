const dotenv = require("dotenv").config();
const express = require('express');
const usersRoute = require("./routes/usersRoute");
const contactsRoute = require("./routes/contactsRoute");
const app = express();

const PORT = process.env.PORT || 5000;

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/users', usersRoute)
app.use('/api/contacts', contactsRoute)


// building default route
app.get('/', (req, res)=>{
    
    res.send('home page');
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}!`)
});