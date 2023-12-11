import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useStore from '../../store/use-store';
import ProductDescription from '../../components/product-description';
import LoadingIndicator from '../../components/loading-indicator';

function ProductPage() {
  const store = useStore();
  const {id} = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productData = await store.actions.product.getProduct(id);
        setProduct(productData);
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [store, id]);

  return (
    <div>
      {loading ?
        <LoadingIndicator /> :
        <ProductDescription product={product} onAdd={(_id) => store.actions.basket.addToBasket(_id)} />}
    </div>
  );
}

export default ProductPage;
