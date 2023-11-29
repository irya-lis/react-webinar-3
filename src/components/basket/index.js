import React, { useState } from "react";
import PropTypes from 'prop-types';
import './style.css';
import BasketList from "../basket-list";


function Basket({ order, removeFromBasket, basket, isBasketShow }) {

  return (
    <div className='Controls'>
      <div className='basket-show'>
        <BasketList order={order}  removeFromBasket={removeFromBasket} />
      </div>
      }
    </div>
  );
}

Basket.propTypes = {
  removeFromBasket: PropTypes.func,
};

Basket.defaultProps = {
  removeFromBasket: () => { },
};

export default React.memo(Basket);