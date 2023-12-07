import React, {memo} from "react";
import {cn as bem} from "@bem-react/classname";
import "./style.css";
import PropTypes from 'prop-types';
import Head from "../head";
import {NavLink} from "react-router-dom";

function ProductDescription(props) {
  const cn = bem("Product-description");

  if(!props.data) {
    return <div>Loading...</div>
  }

  return (
    <>
      <Head title={props.data.title}/>
      <NavLink to="/" className={cn("link")}>
        Главная
      </NavLink>
      <span className={cn("description")}>
        {props.data.description}
      </span>
      <span className={cn("made-in")}>
       Страна производитель:  <b>{props.data.madeIn}</b>
      </span>
      <span className={cn("category")}>
        Категория: <b>{props.data.category}</b>
      </span>
      <span className={cn("edition")}>
        Год выпуска: <b>{props.data.edition}</b>
      </span>
      <span className={cn("price")}>
        Цена: <b>{props.data.price} ₽</b>
      </span>
      <button className={cn("button")}
        onClick={() => props.addToBasket(props._id)}>
        Добавить
      </button>
    </>
  );
}

export default memo(ProductDescription);

ProductDescription.propTypes = {
  data: PropTypes.shape({
    description: PropTypes.string,
    title: PropTypes.string,
    madeIn: PropTypes.string,
    category: PropTypes.string,
    edition: PropTypes.number,
    price: PropTypes.number,
  }).isRequired,
  addToBasket: PropTypes.func,
  _id: PropTypes.string,
};

ProductDescription.defaultProps = {
  addToBasket: () => {},
};

