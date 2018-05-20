const express = require("express");
const router = express.Router();

const foodController = require("./controller");

router.post("/", (req, res) => {
  foodController
    .createFood(req.body)
    .then(result => res.send(result))
    .catch(err => {
      console.error(err);
      res.status(500).send(err);
    });
});

router.get("/", (req, res) => {
  var userInput = req.body.userInput;
  foodController
    .getAllFoodsByCondition(userInput)
    .then(foods => {
      res.send(foods);
    })
    .catch(err => {
      console.log(err);
      res.send(err);
    });
});

router.get("/:id", (req, res) => {
  foodController
    .getFood(req.params.id)
    .then(images => res.send(images))
    .catch(err => {
      console.error(err);
      res.status(500).send(err);
      //200
      //300 redirect
      //404 not found
      //55
    });
});
