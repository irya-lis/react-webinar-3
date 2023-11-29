import React, {useState} from "react";
import PropTypes from 'prop-types';
import './style.css';
import BasketList from "../basket-list";
import {plural} from "../../utils";

function Controls({removeFromBasket, basket, totalPrice}) {
  const [isBasketShow, setIsBasketShow] = useState(false);

  const handleBasketShow = () => {
    setIsBasketShow(!isBasketShow);
  }


  const basketText = (count) => {
    return `В корзине: ${count} ${plural(count, {one: 'товар', few: 'товара', many: 'товаров'})} `;
  }

  return (
    <div className='Controls'>
      {basket ?
        <span>{basketText(basket.length)} / {totalPrice} ₽ </span> :
        <span>В корзине: пусто</span>
      }
      <button onClick={handleBasketShow}>Перейти</button>


      {isBasketShow &&
      <div className='basket-show'>
        <BasketList
          basket={basket}
          totalPrice={totalPrice}
          handleBasketShow={handleBasketShow}
          removeFromBasket={removeFromBasket}

        />
      </div>
      }
    </div>
  );
}

Controls.propTypes = {
  removeFromBasket: PropTypes.func,
};

Controls.defaultProps = {
  removeFromBasket: () => {
  },
};

export default React.memo(Controls);
