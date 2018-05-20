const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ingredientModel = new Schema(
    {
        quantity: { type: String, require: true },
        name: { type: String, require: true }
    }
);

const foodModel = new Schema(
    {
        name: { type: String, require: true },
        description: { type: String, require: true },
        ingredient: { type: [ingredientModel], default: []},
        steps: { type: [String], default: [] },
        timers: { type: Number, default: 0 },
        imageURL: { type: String, require: true },
        originalURL: { type: String, require: true }
    }
);

module.exports = mongoose.model("foods", foodModel);
