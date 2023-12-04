import React from "react";
import PropTypes from "prop-types";

function AddToBasketButton(props) {
  return (
    <button onClick={props.onClick}>
      Добавить
    </button>
  );
}

AddToBasketButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddToBasketButton;
