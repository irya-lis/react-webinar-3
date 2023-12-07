import React, { memo, useCallback, useEffect } from 'react';
import { useLocation } from 'react-router';
import useStore from '../../store/use-store';
import useSelector from '../../store/use-selector';
import ProductDescription from '../../components/product-description';
import PageLayout from "../../components/page-layout";
import Head from "../../components/head";

function ProductPage() {
  const location = useLocation();
  const id = location.pathname.slice(9);
  const store = useStore();
  const select = useSelector((state) => state.product);

  const addToBasket = useCallback((_id) => store.actions.basket.addToBasket(id), [store]);

  useEffect(() => {
    store.actions.product.getProduct(id);
  }, [id]);

  return (
    <>
     < PageLayout>
       <ProductDescription
         data={{
           title: select.title,
           description: select.description,
           madeIn: select.madeIn,
           category: select.category,
           edition: select.edition,
           price: select.price,
         }}
         addToBasket={addToBasket}
         _id={id}
       />
     </PageLayout>

    </>
  );
}

export default memo(ProductPage);
