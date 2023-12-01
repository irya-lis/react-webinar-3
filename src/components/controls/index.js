import React, {useState} from "react";
import PropTypes from 'prop-types';
import './style.css';
import BasketList from "../basket-list";
import {plural} from "../../utils";

function Controls(props) {
  const [isBasketShow, setIsBasketShow] = useState(false);

  const handleBasketShow = () => {
    setIsBasketShow(!isBasketShow);
  }

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
        })} / ${props.totalPrice} ₽` : 'пусто'}
    </span>
    );
  }

  return (
    <div className='Controls'>
    <span className="Controls-basket">
      <span>{basketText(props.basket?.length)}</span>
    </span>
      <button className="Controls-button" onClick={handleBasketShow}>Перейти</button>

      {isBasketShow && (
        <>
          <div className="Basket-overlay" onClick={handleBasketShow}/>
          <div className="Basket-show">
            <BasketList
              basket={props.basket}
              totalPrice={props.totalPrice}
              isBasketShow={isBasketShow}
              handleBasketShow={handleBasketShow}
              addItemToBasket={props.addItemToBasket}
              removeFromBasket={props.removeFromBasket}
            />
          </div>
        </>
      )}
    </div>
  );
}

Controls.propTypes = {
  basket: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ),
  totalPrice: PropTypes.number.isRequired,
  addItemToBasket: PropTypes.func.isRequired,
  removeFromBasket: PropTypes.func,
};

export default React.memo(Controls);
