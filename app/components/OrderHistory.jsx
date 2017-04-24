import React from 'react'
import store from '../store'

const localState = store.getState()
const orders = [
  {
    'costBeforeShipping': 0,
    'fullAddress': 'null\nnull null\nnull)',
    'id': 3,
    'products': { 1: 3, 4: 2 },
    'subtotal': 0,
    'tax': 0,
    'address': null,
    'city': null,
    'state': null,
    'zip': null,
    'shippingMethod': null,
    'completedPurchase': true,
    'purchaseDate': null,
    'created_at': '2017-04-18T20:09:43.707Z',
    'updated_at': '2017-04-18T20:09:43.707Z',
    'user_id': 1
  },
  {
    'costBeforeShipping': 0,
    'fullAddress': 'null\nnull null\nnull)',
    'id': 4,
    'products': {6: 34, 5: 21},
    'subtotal': 0,
    'tax': 0,
    'address': null,
    'city': null,
    'state': null,
    'zip': null,
    'shippingMethod': null,
    'completedPurchase': true,
    'purchaseDate': null,
    'created_at': '2017-04-18T20:42:19.940Z',
    'updated_at': '2017-04-18T20:42:19.940Z',
    'user_id': 1
  }]


const OrderHistory = props => {
  return (
    <div>
      <h2 style={{ fontStyle: 'arial' }}>Order History</h2>
      <ul style={{ listStyle: 'none' }}>
        {
          orders && orders.map(order => {
            return (
              <div className="orderHistory">
              <li>
                <div key={order.id}>
                  <h3>{`Order #${order.id}`}</h3>
                  <span>{`Purchase Date: ${order.created_at}`}</span>
                  {
                    localState.magnet && localState.magnet.filter(mag => {
                      return order.products[mag.itemNumber]
                    }).map(magnet => {
                      return (
                      <div style={{ padding: 5 }}>
                        <img style={{ width: '35%' }} src={magnet.image}/>
                        <div>
                          <span>{magnet.title}</span>
                        </div>
                        <div>
                          <span>{`$${magnet.price}`}</span>
                        </div>
                        <div>
                          <span>{`Quantity: ${order.products[magnet.itemNumber]}`}</span>
                        </div>
                        <div>
                          <h5>{`Subtotal: $${(+magnet.price * order.products[magnet.itemNumber]).toFixed(2)}`}</h5>
                        </div>
                      </div>
                      )
                    })
                  }
                  <h4>{`Total: $${order.subtotal}`}</h4>
                </div>
              </li>
              </div>
            )
          })
        }
      </ul>
    </div>
  )
}

export default OrderHistory
