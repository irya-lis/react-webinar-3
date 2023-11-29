import React from "react";
import PropTypes from 'prop-types';
import './style.css';
import Head from "../head";
import BasketItem from "../basket-item";

const BasketList = (props) => {
  const {handleBasketShow, removeFromBasket, basket = []} = props;

  const totalPrice = basket.reduce((sum, el) => {
    return sum + el.price * el.quantity;
  }, 0);

  return (
    <div>

      <ul className="Basket-list">
        {basket && basket.length ? (
          basket.map(item => (
            <BasketItem key={item.code}
                        item={item}
                        removeFromBasket={removeFromBasket}/>
          ))
        ) : <div>Корзина пуста</div>
        }

        {
          basket.length > 0 &&
          <div className="Basket-total-price">Итого: {totalPrice} ₽</div>
        }


        <button className="Basket-close" onClick={handleBasketShow}>
          Закрыть
        </button>
      </ul>
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
