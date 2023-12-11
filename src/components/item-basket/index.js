import React, {memo, useCallback} from 'react';
import propTypes from 'prop-types';
import {numberFormat} from "../../utils";
import {cn as bem} from "@bem-react/classname";
import PropTypes from "prop-types";
import './style.css';
import useStore from "../../store/use-store";
import {useNavigate} from "react-router";

function ItemBasket(props) {
  const store = useStore();
  const navigate = useNavigate();
  const cn = bem('ItemBasket');

  const callbacks = {
    onRemove: (e) => {
      props.onRemove(props.item.result._id)
    },
    closeModal: useCallback(() => store.actions.modals.close(), [store]),
  };

  return (
    <div className={cn()}>
      <div className={cn("title")}
           onClick={() => {
             navigate(`/${props.item.result._id}`);
             callbacks.closeModal()
           }}>
        {props.item.result.title}
      </div>
      <div className={cn('right')}>
        <div className={cn('cell')}>{numberFormat(props.item.result.price)} ₽</div>
        <div className={cn('cell')}>{numberFormat(props.item.amount || 0)} шт</div>
        <div className={cn('cell')}>
          <button onClick={callbacks.onRemove}>Удалить</button>
        </div>
      </div>
    </div>
  )
}

ItemBasket.propTypes = {
  item: PropTypes.shape({
    _id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    title: PropTypes.string,
    price: PropTypes.number,
    amount: PropTypes.number
  }).isRequired,
  onRemove: propTypes.func,
}

ItemBasket.defaultProps = {
  onRemove: () => {
  },
}

export default memo(ItemBasket);