import { ListWrapper } from './styles';
import { useState } from 'react';
import Card from './components/Card';
import { Product } from 'types';
import ProductModal from 'components/ProductModal';

type Props = {
  products: Product[];
  loading: boolean;
};

function List({ products, loading }: Props) {
  const [ selectedProduct, setSelectedProduct ] = useState<Product | null>(null);

  const onSelectProduct = (product: Product | null) => {
    setSelectedProduct(product);
  }

  return (
    <>
      <ListWrapper>
        {products.length > 0
          ? products.map((product: Product) => 
            <Card key={product.id} product={product} onSelectProduct={onSelectProduct} />
          ) : (!loading && <div className="empty">No Data Available.</div>)
        }
      </ListWrapper>
      <ProductModal selectedProduct={selectedProduct} onSelectProduct={onSelectProduct} />
    </>
  )
}

export default List;