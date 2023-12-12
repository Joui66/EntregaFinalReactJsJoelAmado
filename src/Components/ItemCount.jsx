import React, { useState, useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import { Item } from './Item';

const ItemCount = (id, price) => {

  const [cart, setCart] = useContext(CartContext)


  const Agregar = () => {
    setCart((currItems) => {
      const BuscarItem = currItems.find((Item) => Item.id == id);
      if(BuscarItem){
        return currItems.map((item) => {
          if(item.id == id){
            return {...item, quantity: item.quantity + 1}
          }else{
            return item;
          }
        });
      }else{
        return [...currItems, {id, quantity: 1, price }]
      }
    });
    console.log(`Haz agregado: ${quantityPerItem + 1} unidades al carrito.`);
  };

  const RemoveItem = (id) => {
    setCart((currItems  ) => {
      if(currItems.find((item) => item.id === id)?.quantity === 1){
        return currItems.filter((item) => item.id !== id)
      }else{
        return currItems.map((item) =>{
          if(item.id === id){
            return {...item, quantity: item.quantity - 1}
          }else{
            return item;
          }
        })
      }
    })
  }


  const getQuantityById = (id) => {
    return cart.find((item) => item.id === id)?.quantity || 0;
  };

  const quantityPerItem = getQuantityById(id);

  return (
    <div>
      {
        quantityPerItem > 0 && (
          <div>{quantityPerItem}</div>
        )
      }
    </div>
  );
};

export default ItemCount;
