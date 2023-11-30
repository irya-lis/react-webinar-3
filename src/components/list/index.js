import React from "react";
import PropTypes from 'prop-types';
import Item from "../item";
import './style.css';

function List(props) {

  if(!props.list.length) {
    return <h3>Nothing here</h3>
  }
  return (
    <div className='List'>
      {
        props.list.map(item =>
        <div key={item.code} className='List-item'>
          <Item item={item} addItemToBasket={props.addItemToBasket} />
        </div>
      )}
    </div>
  )
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
  }
}

export default React.memo(List);
