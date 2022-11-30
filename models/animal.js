const mongoose = require("mongoose")
const animalSchema = mongoose.Schema({
    animalName: {
        type: String,
        required: [true, 'Name of the Animal cannot be empty']
    },
    animalWeight: {
        type: Number,
        required: [true, 'Weight of the Animal cannot be empty']
    },
    animalType: {
        type: String,
        required: [true, 'Animal Type cannot be empty']
    },

});
module.exports = mongoose.model("Animal",
animalSchema)