import React, { useState, useEffect } from 'react';
import { ItemList } from "./ItemList";
import { useParams } from 'react-router-dom';
import { getProducts } from "../asyncMock";


export const ItemListContainer = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getProducts()
      .then((resp) => {
        if (id) {
          const productsFilter = resp.filter((product) => product.category === id);

            if(productsFilter.length > 0) {
              setProducts(productsFilter);
            } else {
              setProducts(resp);
            }
        } else {
          setProducts(resp);
        }
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, [id]);

  return <>{isLoading ? <h2> Cargando productos... </h2> : <ItemList products={products}/>}</>;
};