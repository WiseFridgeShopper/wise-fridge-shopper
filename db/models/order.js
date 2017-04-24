'use strict'
const {STRING, TEXT, FLOAT, JSON, ENUM, DATE, INTEGER, BOOLEAN} = require('sequelize')
const states = [
  'AL',
  'AK',
  'AZ',
  'AR',
  'CA',
  'CO',
  'CT',
  'DE',
  'FL',
  'GA',
  'HI',
  'ID',
  'IL',
  'IN',
  'IA',
  'KS',
  'KY',
  'LA',
  'ME',
  'MD',
  'MA',
  'MI',
  'MN',
  'MS',
  'MO',
  'MT',
  'NE',
  'NV',
  'NH',
  'NJ',
  'NM',
  'NY',
  'NC',
  'ND',
  'OH',
  'OK',
  'OR',
  'PA',
  'RI',
  'SC',
  'SD',
  'TN',
  'TX',
  'UT',
  'VT',
  'VA',
  'WA',
  'WV',
  'WI',
  'WY']

module.exports = db => db.define('order', {
  products: {
    type: JSON,
  },
  subtotal: {
    type: FLOAT,
    defaultValue: 0.00
  },
  tax: {
    type: FLOAT,
    defaultValue: 0.00
  },
  address: {
    type: STRING,
  },
  city: {
    type: STRING,
  },
  state: {
    type: ENUM(...states),
  },
  zip: STRING,
  shippingMethod: ENUM('Express', 'Standard'),
  completedPurchase: {
    type: BOOLEAN,
    defaultValue: false
  },
  purchaseDate: DATE
}, {
  getterMethods: {
    costBeforeShipping: function() {
      return this.subtotal + this.tax
    },
    fullAddress: function() {
      return `${this.address}\n${this.city} ${this.state}\n${this.zip}`
    }
  }
})

module.exports.associations = (Order, {User, Magnet}) => {
  Order.belongsTo(User)
  Order.belongsToMany(Magnet, {through: 'MagnetsOrders'})
}
