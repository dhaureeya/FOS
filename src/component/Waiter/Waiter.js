import React from 'react';
import"./waiter.css";
import Itemcard from "./Itemcard";
import data from './Data/data';
import {useCart} from 'react-use-cart';
import Cart from './Cart';
import Header from '../Header/Header';
import { useEffect, useState } from "react";

const Waiter = () => {
  const { addItem } = useCart();
  const [allitem, setAllitem] = useState(false);
  const [allHotCoffee, setallHotCoffee] = useState(false);
  const [allColdCoffee, setallColdCoffee] = useState(false);
  const [allBakery, setallBakery] = useState(false);

  const handleAll = () => {
    setAllitem(true);
    setallColdCoffee(false);
    setallHotCoffee(false);
    setallBakery(false);
    localStorage.setItem('items', JSON.stringify(true));
    localStorage.setItem('hotcoffee', JSON.stringify(false));
    localStorage.setItem('coldcoffee', JSON.stringify(false));
    localStorage.setItem('bakery', JSON.stringify(false));
  };

  const handleHotcoffee = () => {
    setallColdCoffee(false);
    setallHotCoffee(true);
    setallBakery(false);
    setAllitem(false);
    localStorage.setItem('hotcoffee', JSON.stringify(true));
    localStorage.setItem('items', JSON.stringify(false));
    localStorage.setItem('coldcoffee', JSON.stringify(false));
    localStorage.setItem('bakery', JSON.stringify(false));
  };

  const handleColdcoffee = () => {
    setallHotCoffee(false);
    setallColdCoffee(true);
    setallBakery(false);
    setAllitem(false);
    localStorage.setItem('coldcoffee', JSON.stringify(true));
    localStorage.setItem('items', JSON.stringify(false));
    localStorage.setItem('hotcoffee', JSON.stringify(false));
    localStorage.setItem('bakery', JSON.stringify(false));
  };

  const handleBakery = () => {
    setallBakery(true);
    setallColdCoffee(false);
    setallHotCoffee(false);
    setAllitem(false);
    localStorage.setItem('bakery', JSON.stringify(true));
    localStorage.setItem('items', JSON.stringify(false));
    localStorage.setItem('hotcoffee', JSON.stringify(false));
    localStorage.setItem('coldcoffee', JSON.stringify(false));
    
  };

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("items"));
    if (storedItems !== null) {
      setAllitem(storedItems);
    }
  }, [setAllitem]);

  useEffect(() => {
    const storedHotItems = JSON.parse(localStorage.getItem("hotcoffee"));
    if (storedHotItems !== null) {
      setallHotCoffee(storedHotItems);
    }
  }, [setallHotCoffee]);

  useEffect(() => {
    const storedColdItems = JSON.parse(localStorage.getItem("coldcoffee"));
    if (storedColdItems !== null) {
      setallColdCoffee(storedColdItems);
    }
  }, [setallColdCoffee]);

  useEffect(() => {
    const storedBakeryItems = JSON.parse(localStorage.getItem("bakery"));
    if (storedBakeryItems !== null) {
      setallBakery(storedBakeryItems);
    }
  }, [setallBakery]);
  
  return (
    <>
    <Header/>
    
    <div className='waiter'>
        <section className='menu' id='menu'>
            <h1 className='heading'> Our <span>Menu</span></h1>
            <div className='waiter-btn'>
              <button className='all-btn' onClick={handleAll}>All</button>
              <button className='all-btn' onClick={handleHotcoffee}>Hot Coffee</button>
              <button className='all-btn' onClick={handleColdcoffee}>Cold Coffee</button>
              <button className='all-btn' onClick={handleBakery}>Bakery</button>
            </div>
            <div className='carts'>
            {allitem?
            <div>
            <h2 className='head'>All Items</h2>
              <div className='box-container'>
              {data.menuItems.map((item,index)=>{
                return(
                <Itemcard 
                img={item.image} 
                name={item.name} 
                price={item.price}
                item={item}
                key={index}
                // addToCart={() => handleAddToCart(item)}
                />
                )
              })}
            </div>
            <div className='box-container'>
              {data.coldCoffee.map((item,index)=>{
                return(
                <Itemcard 
                img={item.image} 
                name={item.name} 
                price={item.price}
                item={item} 
                key={index}/>
                )
              })}</div>
              <div className='box-container'>
              {data.bakery.map((item,index)=>{
                return(
                <Itemcard 
                img={item.image} 
                name={item.name} 
                price={item.price}
                item={item} 
                key={index}/>
                )
              })}  </div>
            </div>
            :
            null
            }
            {allHotCoffee?
              <div className='hot'>
            <h2 className='head'>Hot Coffee</h2>
            <div className='box-container'>
              {data.menuItems.map((item,index)=>{
                return(
                <Itemcard 
                img={item.image} 
                name={item.name} 
                price={item.price}
                item={item}
                key={index}
                // addToCart={() => handleAddToCart(item)}
                />
                )
              })}
            
            </div>
            </div>
            :
            null
            }
            {allColdCoffee?
              <div className='cold'>
            <h2 className='head'>Cold Coffee</h2>
            <div className='box-container'>
              {data.coldCoffee.map((item,index)=>{
                return(
                <Itemcard 
                img={item.image} 
                name={item.name} 
                price={item.price}
                item={item} 
                key={index}/>
                )
              })}</div></div>
            :
            null
            }
            {allBakery?
              <div className='bakery'>
              <h2 className='head'>Bakery</h2>
            <div className='box-container'>
              {data.bakery.map((item,index)=>{
                return(
                <Itemcard 
                img={item.image} 
                name={item.name} 
                price={item.price}
                item={item} 
                key={index}/>
                )
              })}  </div>
            </div>
            :
            null
            }
            </div>
          
        </section> 
        
        <section className='cart1'>
          <div >
              <Cart/>
          </div>
        </section>
    </div> 
    </> 
  )
}

export default Waiter;
