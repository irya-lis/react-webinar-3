import React from "react";
import PropTypes from 'prop-types';
import './style.css';
import {formatNumberWithCommas, plural} from "../../utils";

function Controls(props) {

  /**
   * Отображение уникальных товаров с плюрализацией в корзине и их общей стоимости, иначе - 'пусто'
   * @param {number} count Количество товаров
   */
  const basketText = (count) => {
    return (
      <span>
        <p className="Basket-text">В корзине: </p>
        {count > 0 ? `${count} ${plural(count, {
          one: 'товар',
          few: 'товара',
          many: 'товаров'
        })} / ${formatNumberWithCommas(props.totalPrice)} ₽` : 'пусто'}
    </span>
    );
  }

  return (
    <div className='Controls'>
    <span className="Controls-basket">
      <span>{basketText(props.basket?.length)}</span>
    </span>
      <button className="Controls-button" onClick={props.handleBasketShow}>Перейти</button>
    </div>
  );
}

Controls.propTypes = {
  basket: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      price: PropTypes.number,
      quantity: PropTypes.number,
    })
  ),
  totalPrice: PropTypes.number.isRequired,
  addItemToBasket: PropTypes.func.isRequired,
  removeFromBasket: PropTypes.func,
};

export default React.memo(Controls);
