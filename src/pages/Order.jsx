import React from 'react'

const Order = ({ cart, setCart }) => {
  return (
    <div>
      <h3>Your Cart</h3>
      <div>
        {cart.map((item) => (
          <div className="cart-items" key={item.id}>
            <img alt={item.name} src={item.image} />
            console.log(item)
          </div>
        ))}
      </div>
    </div>
  )
}

export default Order
