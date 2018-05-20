const ingredientModel = require("./model");
const fs = require("fs");

const createIngredient = ({ name }) =>
    new Promise((resolve, reject) => {
        ingredientModel
            .create({
                name: name
            })
            .then(data => resolve({ id: data._id }))
            .catch(err => reject(err));
    });

const getIngredient = ingId =>
    new Promise((resolve, reject) => {
        ingredientModel.find()
            .where({
                _id: ingId
            })
            .exec()
            .then(data => resolve(data))
            .catch(err => reject(err));
    });

const getAllIngredients = () =>
    new Promise((resolve, reject) => {
        ingredientModel
            .find()
            .exec()
            .then(data => resolve(data))
            .catch(err => reject(err));
    });

module.exports = {
    createIngredient,
    getIngredient,
    getAllIngredients
};



