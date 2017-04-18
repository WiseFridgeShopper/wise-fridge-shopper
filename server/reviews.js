'use strict'

const db = require('APP/db')
const Review = db.model('reviews')

module.exports = require('express').Router()
  .get('/', (req, res, next) => {
    let getAllReviewsPromise

    req.queryIdString === 'user'
      ? getAllReviewsPromise = Review.findAll({where: {user_id: req.queryId}})
        : getAllReviewsPromise = Review.findAll({where: {magnet_id: req.queryId}})
    getAllReviewsPromise
      .then(reviews => res.json(reviews))
      .catch(next)
  })
  .post('/', (req, res, next) => {
    Review.create(req.body)
    .then(review => res.status(201).json(review))
    .catch(next)
  })
