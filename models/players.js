const mongoose=require("mongoose");

const playersSchema = new mongoose.Schema({});

module.exports=mongoose.model("Player", playersSchema);