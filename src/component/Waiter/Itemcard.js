import React from 'react'
import { useCart } from 'react-use-cart'

const Itemcard = (props) => {
  const {addItem}= useCart();
  // console.log(addItem)
  return (
    // <div class="card">
  <div class="card-body">
  <div class="card-body12">
  <img src={props.img} class="card-img-top"/>
    <h5 class="card-title">{props.name}</h5>
    <h5 class="card-title">Rs {props.price}</h5>
    <button class="btn12"
     onClick={ () => addItem(props.item)}>Add to Cart</button>
  </div>
</div>
  )
}

export default Itemcard