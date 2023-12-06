import Head from "../head";
import React, {memo} from "react";
import HomePage from "../home-page";

function ProductDescription(props) {
  const {title, renderItem, description, madeIn, category, edition, price} = props;

  return (
    <>
      <Head title={title}/>
      <HomePage/>
      {renderItem}
      <span className='List'>{description}</span>
      {madeIn && madeIn.title && madeIn.code && (
        <span>Страна производитель: {madeIn.title} {madeIn.code}</span>
      )}
      <span>Категория: {category}</span>
      <span>Год выпуска: {edition}</span>
      <span>Цена: {price} ₽</span>

    </>
  );
}

export default memo(ProductDescription);
