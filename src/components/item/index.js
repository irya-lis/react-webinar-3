import React from "react";
import PropTypes from "prop-types";
import './style.css';

function Item({item, quantity, isBasketShow, addItemToBasket, removeFromBasket}) {

  const handleActionClick = () => {
    if (isBasketShow) {
      removeFromBasket(item.code);
    } else {
      addItemToBasket(item);
    }
  };

  return (
    <div className='Item'>
      <div className='Item-code'>{item.code}</div>
      <div className='Item-title'>{item.title}</div>
      <div className='Item-price'>{item.price} ₽</div>
      {isBasketShow &&
      <div className='Item-quantity'>{quantity} <span>шт</span></div>
      }
      <div className='Item-actions'>
        <button onClick={handleActionClick}>
          {isBasketShow ? "Удалить" : "Добавить"}
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
