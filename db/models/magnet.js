'use strict'

const {STRING, INTEGER, TEXT, ARRAY, FLOAT} = require('sequelize')

module.exports = db => db.define('magnet', {
  quote: {
    type: TEXT,
    allowNull: false
    // JM/RT - also use notEmpty?
  },
  price: {
    // JM/RT - maybe consider integer?
    type: FLOAT,
    allowNull: false
  },
  image: {
    // JM/RB - isURl?
    type: STRING,
    allowNull: false
  },
  title: {
    type: STRING,
    allowNull: false
  },
  description: {
    type: TEXT,
    allowNull: false
  },
  itemNumber: {
    // JM/RB - some kind of uniqueness
    type: INTEGER,
    allowNull: false,
    validate: {
      isInt: true
    }
  },
  size: {
    type: ARRAY(INTEGER),
    allowNull: false
  },
  mood: {
    type: ARRAY(STRING),
    allowNull: false
  }

})

module.exports.associations = (Magnet, {Speaker, Review, Order}) => {
  Magnet.belongsTo(Speaker)
  Magnet.hasMany(Review, {as: 'reviews'})
  // JM/RT - consider renaming join table MagnetOrders
  Magnet.belongsToMany(Order, {through: 'ProductOrders'})
}
