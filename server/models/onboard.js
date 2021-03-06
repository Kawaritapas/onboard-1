let mongoose = require("mongoose");

let onboardSchema = new mongoose.Schema({
    "id":Number,
    "problem":String,
    "options":Object
})


let Onboard = mongoose.model("Onboard",onboardSchema);
module.exports = Onboard