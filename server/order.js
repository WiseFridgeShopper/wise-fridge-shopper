'use strict'

const db = require('APP/db')
const Order = db.model('orders')
const User = db.model('users')

module.exports = require('express').Router()
  // find user purchase history
  .get('/orderHistory/:userId', (req, res, next) => {
    Order.findAll({
      where: {
        user_id: req.params.userId,
        completedPurchase: true
      }
    })
    .then(userPurchases => res.send(userPurchases))
    .catch(next)
  })
  // get a user's shopping cart
  .get('/shoppingCart/:userId', (req, res, next) => {
    Order.findOne({where: {
      user_id: req.params.userId,
      completedPurchase: false
    }})
    .then(shoppingCart => res.send(shoppingCart))
    .catch(next)
  })
  // Create a new order
  .post('/', (req, res, next) => {
    Order.create(req.body)
    .then(newOrder => res.status(201).json(newOrder))
    .catch(next)
  })
  // remove a order
  .delete('/:orderId', (req, res, next) => {
    Order.destroy({
      where: {
        id: req.params.orderId
      }
    })
    .then(destroyedOrder => {
      destroyedOrder ? res.sendStatus(204) : res.sendStatus(404)
    })
    .catch(next)
  })
  // update an order
  .put('/:orderId', (req, res, next) => {
    Order.update(req.body, {
      where: {
        id: req.params.orderId
      },
      returning: true,
      plain: true
    })
    .then(updatedOrder => {
      updatedOrder ? res.send(updatedOrder) : res.sendStatus(404)
    })
  })
