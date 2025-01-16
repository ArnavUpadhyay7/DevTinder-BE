const mongoose = require('mongoose');

const connectDB = async () => {
    await mongoose.connect("mongodb+srv://arnavupadhyay7:3aHVLaDfzfZHS2S6@devtinder.v6ghh.mongodb.net/devTinder");
}

module.exports = connectDB;
