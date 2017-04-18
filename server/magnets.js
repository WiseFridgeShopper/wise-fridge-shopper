'use strict'

const db = require('APP/db')
const Magnet = db.model('magnet')
const reviews = require('APP/server/reviews')

module.exports = require('express').Router()
  .get('/', (req, res, next) => {
    Magnet.findAll()
      .then(magnets => res.json(magnets))
      .catch(next)
  })
  .post('/', (req, res, next) => {
    Magnet.create(req.body)
      .then(magnet => res.status(201).json(magnet))
      .catch(next)
  })
  .get('/:id', (req, res, next) => {
    Magnet.findById(req.params.id)
    .then(magnet => res.json(magnet))
    .catch(next)
  })
  .delete('/:id', (req, res, next) => {
    Magnet.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(destroyedRows => {
      destroyedRows ? res.sendStatus(204) : res.sendStatus(404)
    })
    .catch(next)
  })
  .put('/:id', (req, res, next) => {
    Magnet.update(req.body, {
      where: {
        id: req.params.id
      },
      returning: true,
      plain: true
    })
    .then(updatedMagnet => {
      updatedMagnet ? res.send(updatedMagnet) : res.sendStatus(404)
    })
    .catch(next)
  })
  .use('/:id/reviews', (req, res, next) => {
    req.queryIdString = 'magnet'
    req.queryId = req.params.id
    next()
  }, reviews)
