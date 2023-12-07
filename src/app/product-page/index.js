import React, { memo, useCallback, useEffect } from 'react';
import {useParams} from 'react-router';
import useStore from '../../store/use-store';
import useSelector from '../../store/use-selector';
import ProductDescription from '../../components/product-description';


function ProductPage() {

  const store = useStore();
  const {id}= useParams();

  useEffect(() => {
    store.actions.product.getProduct(id);
  }, [id]);


  const state = useSelector((state)=> state.product)
  const callbacks = {
    addToBasket: useCallback(_id => store.actions.basket.addToBasket(_id), [store, id]),

  }

  return (
    <>
        {state && <ProductDescription product={state} onAdd={callbacks.addToBasket}/>}
    </>
  );
}

export default memo(ProductPage);