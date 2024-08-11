const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://khannaanshul30:E5CFCa8xnGGT5ZfM@crudcluster.xuy5d.mongodb.net/`);

const userSchema = mongoose.Schema({
    name: String,
    image: String,
    email: String
})

module.exports = mongoose.model("user", userSchema);
