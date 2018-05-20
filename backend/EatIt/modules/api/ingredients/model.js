const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ingredientModel = new Schema(
    {
        name: { type: String, required: true },
    }
)

module.exports = mongoose.model("ingredients", ingredientModel);