import React from "react";
import PropTypes from "prop-types";

function RemoveFromBasketButton(props) {
  return (
    <button onClick={props.onClick}>
      Удалить
    </button>
  );
}

RemoveFromBasketButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default RemoveFromBasketButton;
