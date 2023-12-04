import React, {useCallback, useState} from "react";
import PageLayout from "./components/page-layout";
import Head from "./components/head";
import Controls from "./components/controls";
import List from "./components/list";
import Modal from "./components/modal";
import BasketList from "./components/basket-list";

function App({store}) {
  const list = store.getState().list || [];
  const basket = store.getState().basket || [];
  const totalPrice = store.getState().totalPrice || 0;

  const [isBasketShow, setIsBasketShow] = useState(false);

  const handleBasketShow = () => {
    setIsBasketShow(!isBasketShow);
  }

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
        handleBasketShow={handleBasketShow}
        addItemToBasket={callbacks.addItemToBasket}
      />
      <List
        list={list}
        addItemToBasket={callbacks.addItemToBasket}
      />

      {isBasketShow && (
        <Modal>
          <BasketList
            basket={basket}
            totalPrice={totalPrice}
            isBasketShow={isBasketShow}
            handleBasketShow={handleBasketShow}
            addItemToBasket={callbacks.addItemToBasket}
            removeFromBasket={callbacks.removeFromBasket}
          />
        </Modal>
      )}
    </PageLayout>
  );
}

export default App;
