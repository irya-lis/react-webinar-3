import React from "react";
import PropTypes from "prop-types";
import './style.css';

function Item(props) {

  const { item, addItemToBasket } = props;

  const handleAddToBasket = () => {
    addItemToBasket(item);
  };

  return (
    <div className='Item'>
      <div className='Item-code'>{props.item.code}</div>
      <div className='Item-title'>{props.item.title}</div>
      <div className='Item-price'>{props.item.price} ₽</div>
      <div className='Item-actions'>
        <button onClick={handleAddToBasket}>Добавить</button>
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
  addItemToBasket: PropTypes.func,
};

Item.defaultProps = {
  addItemToBasket: () => {},
};

export default React.memo(Item);
