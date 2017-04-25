import React from 'react'
import store from '../store'

const localState = store.getState()

const Checkout = props => {
  return (
    <div>
      <h2 style={{ fontStyle: 'arial' }}>Current Checkout</h2>
      <ul style={{ listStyle: 'none' }}>
        {
          props.orders && props.orders.map(order => {
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

export default Checkout
