// App.js
import React, {useCallback, useState} from "react";
import PageLayout from "./components/page-layout";
import Head from "./components/head";
import Controls from "./components/controls";
import List from "./components/list";

function App({store}) {
  const list = store.getState().list;
  const basket = store.getState().basket;
  const totalPrice = store.getState().totalPrice;


  const [order, setOrder] = useState([]);

  const callbacks = {
    addItemToBasket: useCallback((item) => {
      setOrder((prevOrder) => [...prevOrder, item]); // Обновляем локальное состояние
      store.addItemToBasket(item);
    }, [store]),

    removeFromBasket: useCallback((itemId) => {
      setOrder((prevOrder) => prevOrder.filter((el) => el.code !== itemId));
      store.removeItemFromBasket(itemId);
    }, [store, setOrder]),
  };

  return (
    <PageLayout>
      <Head title='Магазин'/>
      <Controls
        basket={basket}
        order={order}
        totalPrice={totalPrice}
        removeFromBasket={callbacks.removeFromBasket}

      />
      <List
        list={list}
        addItemToBasket={callbacks.addItemToBasket}
      />


    </PageLayout>
  );
}

export default App;
