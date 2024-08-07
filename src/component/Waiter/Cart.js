import React, { useState ,useEffect} from 'react';
import { useCart } from "react-use-cart";
import "./waiter.css";
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
        addItem
    } = useCart();
    
    const [tableNumber, setTableNumber] = useState(()=>{
        const storedNumber = localStorage.getItem("number");

        return storedNumber ? parseInt(storedNumber) : 0;

      });

      useEffect(()=>{

        localStorage.setItem("number", tableNumber)

      },[tableNumber])
    const navigate = useNavigate();

    const handleTableNumberChange = (e) => {
        setTableNumber(e.target.value)
    }

    const handleGotoKitchen = () => {
        // Navigate to the Kitchen component and pass the items as a prop
        navigate('/kitchen', { state: { tableNumber } });
    }


    if (isEmpty) return <h1 className='text-center'>Your Cart is Empty</h1>
    
    return (
        <section className='my-second'>
            <div className='justify-content'>
                <div className='col-12'>
                    <h5 className='cart-head'><b>Cart: {totalUniqueItems}   Total Items: {totalItems}</b></h5>
                    <form className='tableno'>
                    <label>Table No:
                        <input className='TB1' type="number" value={tableNumber} onChange={handleTableNumberChange}  />
                    </label>
                    </form>
                    <table className='table'>
                        <tbody>
                            {items.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>
                                            <img src={item.image} style={{ height: '6rem' }} />
                                        </td>
                                        <td>{item.name}</td>
                                        <td>{item.price}</td>
                                        <td>Quantity ({item.quantity})</td>
                                        <td>
                                            <button className='btn btn-info ms-2'
                                                onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                                            >-</button>
                                            <button className='btn btn-info ms-2'
                                                onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                                            >+</button>
                                            <button className='btn btn-danger ms-2'
                                                onClick={() => removeItem(item.id)}
                                            >Remove Item</button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    <div className='col-auto ms-auto'>
                        <h2>Total Price: {cartTotal}</h2>
                    </div>
                    <div className='col-auto'>
                        <button
                            className='btn btn-danger m-2'
                            onClick={() => emptyCart()}>
                            Clear Cart
                        </button>
                        <button className='btn btn-primary m-2'
                            onClick={handleGotoKitchen}>
                            Send to Kitchen
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cart;

