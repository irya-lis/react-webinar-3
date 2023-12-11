import React, {memo} from "react";
import {cn as bem} from '@bem-react/classname';
import "./style.css";
import PropTypes from 'prop-types';
import Head from "../head";
import PageLayout from "../page-layout";
import ContentInformation from "../../app/content-information";

function ProductDescription(props) {
  const cn = bem("Product-description");
  const {title, description, madeIn, category, edition, price} = props.product;

  if (!props.product) {
    return null;
  }

  const {title: titleMadeIn, code} = madeIn || {};
  const {title: titleCategory} = category || {};

  const handleAddToBasket = () => {
    props.onAdd(props.product._id);
  };

  return (
    <>
      <PageLayout className={cn}>
        <Head title={title}/>
        <ContentInformation/>
        <div className={cn("head")}>
          <div className={cn("description")}>{description}</div>
          <div className={cn("made-in")}>
            Страна производитель: <b>{titleMadeIn}</b> <b>({code})</b>
          </div>
          <div className={cn("category")}>
            Категория: <b>{titleCategory}</b>
          </div>
          <div className={cn("edition")}>
            Год выпуска: <b>{edition}</b>
          </div>
          <div className={cn("price")}>
            Цена: <b>{price} ₽</b>
          </div>
          <button className={cn("button")} onClick={handleAddToBasket}>
            Добавить
          </button>
        </div>
      </PageLayout>
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
