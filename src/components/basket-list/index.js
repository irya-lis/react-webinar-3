import React from "react";
import PropTypes from 'prop-types';
import './style.css';
import Head from "../head";
import Item from "../item";

const BasketList = ({basket = [], totalPrice, isBasketShow, handleBasketShow, addItemToBasket, removeFromBasket}) => {

  return (
    <div className="Basket">
      <Head title="Корзина"/>
      <button className="Basket-close" onClick={handleBasketShow}>
        Закрыть
      </button>
      <div>
        {
          basket && basket.length ? (
            basket.map(item => (
              <div key={item.code} className='List-item'>
                <Item
                  key={item.code}
                  item={item}
                  quantity={item.quantity}
                  isBasketShow={isBasketShow}
                  addItemToBasket={addItemToBasket}
                  removeFromBasket={removeFromBasket}
                /></div>
            ))
          ) : <div className="Basket-empty">Корзина пуста</div>
        }
        {
          basket.length > 0 &&
          <div className="Basket-total-price">
            Итого <span>{totalPrice} ₽</span>
          </div>
        }
      </div>
    </div>
  );
}

BasketList.propTypes = {
  order: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  })).isRequired,
  handleBasketShow: PropTypes.func.isRequired,
  removeFromBasket: PropTypes.func.isRequired,
};

export default React.memo(BasketList);
