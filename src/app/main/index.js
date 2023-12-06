import React, {memo, useCallback, useEffect} from 'react';
import Item from "../../components/item";
import PageLayout from "../../components/page-layout";
import Head from "../../components/head";
import BasketTool from "../../components/basket-tool";
import List from "../../components/list";
import useStore from "../../store/use-store";
import useSelector from "../../store/use-selector";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from "../../components/home-page";
import ProductDescription from "../../components/product-description/product-description";


function Main() {
  const store = useStore();

  useEffect(() => {
    store.actions.catalog.load();
  }, []);

  const select = useSelector(state => ({
    list: state.catalog.list,
    amount: state.basket.amount,
    sum: state.basket.sum
  }));

  const callbacks = {
    // Добавление в корзину
    addToBasket: useCallback(_id => store.actions.basket.addToBasket(_id), [store]),
    // Открытие модалки корзины
    openModalBasket: useCallback(() => store.actions.modals.open('basket'), [store]),
  }

  const renders = {
    item: useCallback((item) => {
      return <Item item={item} onAdd={callbacks.addToBasket}/>
    }, [callbacks.addToBasket]),
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PageLayout>
              <Head title="Магазин"/>
              <HomePage/>
              <BasketTool onOpen={callbacks.openModalBasket} amount={select.amount} sum={select.sum}/>
              <List list={select.list} renderItem={renders.item}/>
            </PageLayout>
          }
        />
        <Route path="/product/:productId" element={<ProductDescription/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default memo(Main);
