import { createContext } from 'react';

export const CartContext = createContext({
  items: [],
  addToCart: () => {},
  updateItemQuantity: () => {},
});

/* 
the CartContext has a default object that contain 2 key-value pair(properties)
which: 
- items -> it is an array that will contain data
- addToCart -> is the function that will change the data
this CartContext needs to bind/link with useState
*/
