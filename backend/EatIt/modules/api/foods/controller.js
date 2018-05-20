const foodModel = require("./model");

const createFood = ({
  name,
  description,
  ingredients,
  steps,
  timers,
  imageURL,
  originalURL
}) =>
  new Promise((resolve, reject) => {
    imageModel
      .create({
        name,
        description,
        ingredients,
        steps,
        timers,
        imageURL,
        originalURL
      })
      .then(data => resolve({ id: data._id })) // chi tra lai id
      .catch(err => reject(err));
  });

const getAllFoodsByCondition = userInput =>
  new Promise((resolve, reject) => {
    foodModel
      .find()
      .exec()
      .select("_id name description ingredients")
      .then(async function(foods) {
        let result = await filterFood(userInput, foods);
        resolve(result);
      })
      .catch(err => reject(err));
  });

async function filterFood(userInput, foods) {
  var result = [];
  foods.forEach(food => {
    if (userInput.length > food.ingredients.length) {
      var flag = false;
      food.ingredients.every(item => {
        if (!userInput.includes(item)) {
          flag = true;
        }
      });
      if (!flag) {
        result.push(food);
      }
    }

    if (
      userInput.length < food.ingredients.length &&
      userInput.length > food.ingredients.length - 3
    ) {
      var flag = false;
      userInput.every(item => {
        if (!food.ingredients.includes(item)) {
          flag = true;
        }
      });
      if (!flag) {
        result.push(food);
      }
    }
  });
  return await result;
}

const getFood = id =>
  new Promise((resolve, reject) => {
    foodModel
      .findOne({
        _id: id
      })
      .exec()
      .then(data => resolve(data))
      .catch(err => reject(err));
  });

const getAllIngredients = () =>
  new Promise((resolve, reject) => {
    foodModel
      .find()
      .select("_id ingredients ")
      .exec()
      .then(data => resolve(data))
      .catch(err => reject(err));
  });

module.exports = {
  createFood,
  getAllFoodsByCondition,
  getFood,
  getAllIngredients
};
