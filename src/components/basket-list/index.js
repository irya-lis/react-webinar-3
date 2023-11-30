import React from "react";
import PropTypes from 'prop-types';
import './style.css';
import Head from "../head";
import Item from "../item";

const BasketList = (props) => {

  return (
    <div className="Basket">
      <Head title="Корзина"/>
      <button className="Basket-close" onClick={props.handleBasketShow}>
        Закрыть
      </button>
      <div>
        {
          props.basket && props.basket.length ? (
            props.basket.map(item => (
              <div key={item.code} className='List-item'>
                <Item
                  key={item.code}
                  item={item}
                  quantity={item.quantity}
                  isBasketShow={props.isBasketShow}
                  addItemToBasket={props.addItemToBasket}
                  removeFromBasket={props.removeFromBasket}
                /></div>
            ))
          ) : <div className="Basket-empty">Корзина пуста</div>
        }
        {
          props.basket.length > 0 &&
          <div className="Basket-total-price">
            Итого <span>{props.totalPrice} ₽</span>
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
