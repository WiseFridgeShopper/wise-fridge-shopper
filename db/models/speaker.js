'use strict'

const {STRING, TEXT} = require('sequelize')

module.exports = db => db.define('speakers', {
  name: {
    type: STRING,
    allowNull: false,
  },
  bio: {
    type: TEXT,
    allowNull: true
  },
  image: {
    type: STRING,
    allowNull: false,
    validate: {
      isUrl: true
    }
  }
})

module.exports.associations = (Speaker, {Magnet}) => {
  Speaker.hasMany(Magnet)
}
