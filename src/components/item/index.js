import React from "react";
import PropTypes from "prop-types";
import './style.css';
import {formatNumberWithCommas} from "../../utils";

function Item(props) {
  return (
    <div className='Item'>
      <div className='Item-code'>{props.item.code}</div>
      <div className='Item-title'>{props.item.title}</div>
      <div className='Item-price'>{formatNumberWithCommas(props.item.price)} ₽</div>
      {props.isBasketShow && (
        <div className='Item-quantity'>{props.quantity} <span>шт</span></div>
      )}
      <div className='Item-actions'>
        {props.children}
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
  quantity: PropTypes.number,
  isBasketShow: PropTypes.bool,
  children: PropTypes.node,
};

Item.defaultProps = {
  quantity: 0,
  isBasketShow: false,
  children: null,
};

export default React.memo(Item);
