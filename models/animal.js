const mongoose = require("mongoose")
const animalSchema = mongoose.Schema({
animalName: String,
animalWeight: Number,
animalType: String
})
module.exports = mongoose.model("Animal",
animalSchema)