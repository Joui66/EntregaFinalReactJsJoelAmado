import React, { useContext } from 'react'
import CartWidget from './CartWidget'
import { Menu, MenuButton, MenuList, MenuItem , Flex , Spacer , Box, useConst} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import brand from '../asset/download.jpg'
import { CartContext } from '../Context/CartContext';

const Navbar = () => {  

  const [cart, setCart] = useContext(CartContext);

  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  },0);

  return (
    <div>
<Flex>
  <Box>
    <Link to={"/"}>
    <img src={brand} alt=""  width='60px' height='60px'/>
    <h2>El Bazar Friki</h2>
    </Link>  
  </Box>
  <Spacer/>
  <Menu>
  <MenuButton>
    Menu
  </MenuButton>
  <MenuList>
    <MenuItem>
      <Link to={`/category/${'Comic'}`}>
      Comics
      </Link>
    </MenuItem>
    <MenuItem>
    <Link to={`/category/${'Manga'}`}>
      Mangas
      </Link>
    </MenuItem>
    <MenuItem>
    <Link to={`/category/${'VideoJuegos'}`}>
    VideosJuegos
    </Link>
    </MenuItem>
  </MenuList>
</Menu>
  <Spacer/>
  <Box p='7'>
    <Link to={"/Cart"}>
      Carrito: <span>{quantity}</span>
    </Link>
    
  </Box>
</Flex>


    </div>
  )
}

export default Navbar