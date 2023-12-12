import React from 'react';
import Cart from './Cart';
import { FaShoppingCart } from 'react-icons/fa';
import { Badge } from '@chakra-ui/react';

const CardWidget = () => {
  
  return (
    <div>
      <FaShoppingCart />
      <Badge>{itemCount}</Badge>
    </div>
  );
}

export default CardWidget;
