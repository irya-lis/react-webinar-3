import React, {memo, useCallback} from "react";
import PropTypes from 'prop-types';
import {cn as bem} from '@bem-react/classname';
import {numberFormat, plural} from "../../utils";
import {NavLink} from "react-router-dom";
import './style.css';
import useStore from "../../store/use-store";
import useSelector from "../../store/use-selector";

function BasketTool({sum, amount}) {
  const store = useStore();

  const select = useSelector(state => ({
    list: state.catalog.list,
    amount: state.basket.amount,
    sum: state.basket.sum
  }));

  const callbacks = {
    openModalBasket: useCallback(() => store.actions.modals.open('basket'), [store]),
  }

  const cn = bem('BasketTool');

  return (
    <div className={cn()}>
      <NavLink to='/' className={cn('link')}>Главная</NavLink>
      <div>
        <span className={cn('label')}>В корзине:</span>
        <span className={cn('total')}>
          {select.amount
            ? `${select.amount} ${plural(select.amount, {
              one: 'товар',
              few: 'товара',
              many: 'товаров'
            })} / ${numberFormat(select.sum)} ₽`
            : `пусто`
          }
        </span>
        <button className={cn('button')} onClick={callbacks.openModalBasket}>Корзина</button>
      </div>
    </div>
  );
}

BasketTool.propTypes = {
  onOpen: PropTypes.func.isRequired,
  sum: PropTypes.number,
  amount: PropTypes.number
};

BasketTool.defaultProps = {
  onOpen: () => {
  },
  sum: 0,
  amount: 0
}

export default memo(BasketTool);
