'use strict';

const express = require('express'),

    Food = require('./model'),

    router = express.Router();

router.get('/foods', (req, res, next) => {

    Food.find({})
        .then(foods => {
            res.json({foods});
        })
        .catch(next);
});

router.post('/foods', (req, res, next) => {
    new Food(req.body.food)
        .save()
        .then(food => {
            console.log(food);
            res.json({food});
        })
        .catch(next);
});

module.exports = router;