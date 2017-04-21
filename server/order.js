'use strict'

const db = require('APP/db')
const Order = db.model('order')
const User = db.model('users')

module.exports = require('express').Router()
  // find by order ID
  .get('/:orderId', (req, res, next) => {
    Order.findById(req.params.id)
    .then(foundOrder => res.send(foundOrder))
    .catch(next)
  })
  // find user purchase history
  .get('/history/:userId', (req, res, next) => {
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
  .get('/cart/:userId', (req, res, next) => {
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
    // **THIS IS QUESTIONABLE** if you reach a bug here... beware
    Order.findById(req.params.orderId)
    .then((order) => {
      const updatedOrder = Object.assign(order, req.body)
      Order.update(updatedOrder, {
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
  })
