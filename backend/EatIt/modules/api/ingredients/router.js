const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const ingredientController = require("./controller");

router.get("/", (req, res) => {
    ingredientController
        .getAllIngredients()
        .then(ingredients => res.send(ingredients))
        .catch(err => {
            console.error(err);
            res.status(500).send(err);
        });
});

router.get("/:ingId", (req, res) => {
    ingredientController
        .getIngredient(req.params.ingId)
        .then(ingredient => res.send(ingredient))
        .catch(err => {
            console.error(err);
            res.status(500).send(err);
        });
});

router.post("/", (req, res) => {
    ingredientController
        .createIngredient(req.body)
        .then(result => res.send(result))
        .catch(err => {
            console.error(err);
            res.status(500).send(err);
        });
});

module.exports = router;


