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
    ingredientModel
      .find()
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

const getIngredientsByName = name =>
  new Promise((resolve, reject) => {
    ingredientModel
      .find()
      .exec()
      .then(async data => {
        let result = await getList(name, data);
        resolve(result);
      });
  });
async function getList(name, data) {
  let res = [];
  data.forEach(element => {
    if (element.name.includes(name)) {
      res.push(element);
    }
  });
  return await res;
}

module.exports = {
  createIngredient,
  getIngredient,
  getAllIngredients,
  getIngredientsByName
};
