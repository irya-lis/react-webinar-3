import React from "react";
import PropTypes from 'prop-types';
import Item from "../item";
import './style.css';
import AddToBasketButton from "../add-to-basket-button";

function List(props) {
  if (!props.list.length) {
    return <h3>Nothing here</h3>;
  }

  return (
    <div className='List'>
      {props.list.map(item => (
        <div key={item.code} className='List-item'>
          <Item item={item}>
            <AddToBasketButton onClick={() => props.addItemToBasket(item)}/>
          </Item>
        </div>
      ))}
    </div>
  );
}

List.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  })).isRequired,
  addItemToBasket: PropTypes.func,
};

List.defaultProps = {
  addItemToBasket: () => {
  },
};

export default React.memo(List);
