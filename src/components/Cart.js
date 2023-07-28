import React from 'react'

export default function Cart({cart}) {
  return (
    <div>
        <pre>{JSON.stringify(cart, null, 2)}</pre>
      <h1>Cart</h1>
      
    </div>
  )
}