import React from "react";
import PropTypes from "prop-types";
import './style.css';

function Item(props) {

  /**
   * Добавление или удаление товара из корзины в зависимости от флага isBasketShow
   */
  const handleActionClick = () => {
    if (props.isBasketShow) {
      props.removeFromBasket(props.item.code);
    } else {
      props.addItemToBasket(props.item);
    }
  };

  return (
    <div className='Item'>
      <div className='Item-code'>{props.item.code}</div>
      <div className='Item-title'>{props.item.title}</div>
      <div className='Item-price'>{props.item.price} ₽</div>
      {props.isBasketShow &&
      <div className='Item-quantity'>{props.quantity} <span>шт</span></div>
      }
      <div className='Item-actions'>
        <button onClick={handleActionClick}>
          {props.isBasketShow ? "Удалить" : "Добавить"}
        </button>
      </div>
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.shape({
    code: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  addItemToBasket: PropTypes.func.isRequired,
  quantity: PropTypes.number,
  isBasketItem: PropTypes.bool,
  removeFromBasket: PropTypes.func,
};

Item.defaultProps = {
  isBasketItem: false,
  removeFromBasket: PropTypes.func.isRequired,
};

export default React.memo(Item);
