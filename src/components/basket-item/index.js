import React from 'react';

const BasketItem = ({item, removeFromBasket}) => {
  return (

    <div className='Item'>
      <div className='Item-code'>{item.code}</div>
      <div className='Item-title'>{item.title}</div>
      <div className='Item-price'>{item.price} ₽</div>
      <div className='Item-price'>{item.quantity} шт</div>
      <div className='Item-actions'>
        <button onClick={() => removeFromBasket(item.code)}>Удалить</button>
      </div>
    </div>

  );
};

export default BasketItem;