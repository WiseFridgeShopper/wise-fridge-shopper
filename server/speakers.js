'use strict'

const db = require('APP/db')
const Speaker = db.model('speakers')
const Magnets = db.model('magnet')

module.exports = require('express').Router()
  .get('/', (req, res, next) => {
    Speaker.findAll()
      .then(speakers => res.json(speakers))
      .catch(next)
  })
  .post('/', (req, res, next) => {
    Speaker.create(req.body)
    .then(speaker => res.status(201).json(speaker))
    .catch(next)
  })
  .get('/:id', (req, res, next) => {
    // Be careful here. Tests indicate that you won't receive a Speaker if no magnet associations exist
    Speaker.findById(req.params.id, {
      include: [{
        model: Magnets,
        where: {speaker_id: req.params.id}
      }]
    })
    .then(speaker => {
      speaker ? res.json(speaker) : res.sendStatus(404)
    })
    .catch(next)
  })
  .delete('/:id', (req, res, next) => {
    Speaker.destroy({
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
    Speaker.update(req.body, {
      where: {
        id: req.params.id
      },
      returning: true,
      plain: true
    })
    .then(updatedSpeaker => {
      updatedSpeaker ? res.send(updatedSpeaker) : res.sendStatus(404)
    })
  })
