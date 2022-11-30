const mongoose = require("mongoose")
const animalSchema = mongoose.Schema({
    animalName: {
        type: String,
        minLength: 3,
        maxLength: 10
    },
    animalWeight: Number,
    animalType: {
        type: String,
        minLength: 2,
        maxLength: 12
    },

});
module.exports = mongoose.model("Animal",
animalSchema)