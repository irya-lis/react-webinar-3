import React, {useCallback} from "react";
import PageLayout from "./components/page-layout";
import Head from "./components/head";
import Controls from "./components/controls";
import List from "./components/list";

function App({store}) {
  const list = store.getState().list || [];
  const basket = store.getState().basket || [];
  const totalPrice = store.getState().totalPrice || 0;


  const callbacks = {
    addItemToBasket: useCallback((item) => {
      store.addItemToBasket(item);
    }, [store]),

    removeFromBasket: useCallback((itemId) => {
      store.removeItemFromBasket(itemId);
    }, [store]),
  };

  return (
    <PageLayout>
      <Head title='Магазин'/>
      <Controls
        basket={basket}
        totalPrice={totalPrice}
        addItemToBasket={callbacks.addItemToBasket}
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
