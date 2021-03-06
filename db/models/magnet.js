'use strict'

const {STRING, INTEGER, TEXT, ARRAY, FLOAT} = require('sequelize')

module.exports = db => db.define('magnet', {
  quote: {
    type: TEXT,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  price: {
    type: INTEGER,
    allowNull: false,
    validate: {
      isInt: true
    }
  },
  image: {
    type: STRING,
    allowNull: false,
    validate: {
      isUrl: true
    }
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
    type: INTEGER,
    allowNull: false,
    unique: true,
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
  Magnet.belongsToMany(Order, {through: 'MagnetsOrders'})
}
