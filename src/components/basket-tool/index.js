import React, { memo, useCallback } from "react";
import PropTypes from 'prop-types';
import { cn as bem } from '@bem-react/classname';
import {numberFormat, plural} from "../../utils";
import { NavLink } from "react-router-dom";
import './style.css';
import useStore from "../../store/use-store";

function BasketTool({sum, amount, onOpen}) {
  const store = useStore();

  const select = store.getState().basket;

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
          {amount
            ? `${amount} ${plural(amount, {
              one: 'товар',
              few: 'товара',
              many: 'товаров'
            })} / ${numberFormat(sum)} ₽`
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
  onOpen: () => {},
  sum: 0,
  amount: 0
}

export default memo(BasketTool);
