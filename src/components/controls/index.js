import React, { useState } from "react";
import PropTypes from 'prop-types';
import './style.css';
import BasketList from "../basket-list";
import { plural } from "../../utils";

function Controls({ order, removeFromBasket, basket }) {
  const [isBasketShow, setIsBasketShow] = useState(false);

  const handleBasketShow = () => {
    setIsBasketShow(!isBasketShow);
  }

  const basketText = (count) => {
    return `В корзине: ${count} ${plural(count, { one: 'товар', few: 'товара', many: 'товаров'  })} `;
  }

  return (
    <div className='Controls'>

      {basket ?
        <span>{basketText(basket.length)}</span> :
        <span>В корзине: пусто</span>
      }
      <button onClick={handleBasketShow}>Перейти</button>


      {isBasketShow &&
      <div className='basket-show'>
        <BasketList order={order} handleBasketShow={handleBasketShow} removeFromBasket={removeFromBasket} basket={basket} />
      </div>
      }
    </div>
  );
}

Controls.propTypes = {
  removeFromBasket: PropTypes.func,
};

Controls.defaultProps = {
  removeFromBasket: () => { },
};

export default React.memo(Controls);
