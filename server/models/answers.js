let mongoose = require("mongoose");

let answers = new mongoose.Schema({
    "user":String,
    "answer":String
})

let Answers = mongoose.model("Answers",answers);
module.exports = Answers;