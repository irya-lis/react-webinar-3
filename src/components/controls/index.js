import React, {useState} from "react";
import PropTypes from 'prop-types';
import './style.css';
import BasketList from "../basket-list";
import {plural} from "../../utils";

function Controls({basket, totalPrice, addItemToBasket, removeFromBasket}) {
  const [isBasketShow, setIsBasketShow] = useState(false);

  const handleBasketShow = () => {
    setIsBasketShow(!isBasketShow);
  }

  const basketText = (count) => {
    return (
      <span>
        <p className="Basket-text">В корзине: </p>
        {count > 0 ? `${count} ${plural(count, {
        one: 'товар',
        few: 'товара',
        many: 'товаров'
      })} / ${totalPrice} ₽` : 'пусто'}
    </span>
    );
  }

  return (
    <div className='Controls'>
    <span className="Controls-basket">
      <span >{basketText(basket?.length)}</span>
    </span>
      <button onClick={handleBasketShow}>Перейти</button>

      {isBasketShow &&
      <div className='Basket-show'>
        <BasketList
          basket={basket}
          totalPrice={totalPrice}
          isBasketShow={isBasketShow}
          handleBasketShow={handleBasketShow}
          addItemToBasket={addItemToBasket}
          removeFromBasket={removeFromBasket}
        />
      </div>
      }
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
