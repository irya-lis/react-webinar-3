import React, {memo} from "react";
import {cn as bem} from '@bem-react/classname';
import "./style.css";
import PropTypes from 'prop-types';
import Head from "../head";
import PageLayout from "../page-layout";
import BasketTool from "../basket-tool";

function ProductDescription(props) {
  debugger;
  const cn = bem("Product-description");

  const callbacks = {
    onAdd: (e) => props.onAdd(props.item._id)
  }

  if (!props.product) {
    return <div>Loading...</div>
  }

  const {title, description, madeIn: {title: titleMadeIn, code}, category: {title: titleCategory}, edition, price} = props.product;

  return (
    <>
      < PageLayout>
        <Head title={title}/>
        <BasketTool/>

        <span className={cn("description")}>
        {description}
      </span>
        <span className={cn("made-in")}>
        Страна производитель: <b>{titleMadeIn}</b> <b>{code}</b>
      </span>
        <span className={cn("category")}>
        Категория: <b>{titleCategory}</b>
      </span>
        <span className={cn("edition")}>
        Год выпуска: <b>{edition}</b>
      </span>
        <span className={cn("price")}>
        Цена: <b>{price} ₽</b>
      </span>
        <button className={cn("button")} onClick={callbacks.onAdd}>
          Добавить
        </button>
      </ PageLayout>
    </>
  );
}

export default memo(ProductDescription);

ProductDescription.propTypes = {
  product: PropTypes.shape({
    description: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    madeIn: PropTypes.shape({
      title: PropTypes.string.isRequired,
      code: PropTypes.string.isRequired,
    }).isRequired,
    category: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }).isRequired,
    edition: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
  }),
  onAdd: PropTypes.func,
};
