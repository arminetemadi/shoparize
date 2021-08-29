import { Product } from 'types';
import { ProductModalWrapperStyled } from './styles';
import PriceDetail from 'components/PriceDetail';

type Props = {
  selectedProduct: Product | null;
  onSelectProduct: (product: Product | null) => void;
}

export default function ProductModal({ selectedProduct, onSelectProduct }: Props) {
  if (!selectedProduct) return (<></>);
  const { title, description, image_link, price, shipping, availability, brand, condition } = selectedProduct;

  const onClose = (event: any) => {
      if (
        event.target.className.split(' ').includes('visible') ||
        event.target.className.split(' ').includes('close')
      )
        onSelectProduct(null);
  }

  console.log('selectedProduct : ', selectedProduct)
  return (
    <ProductModalWrapperStyled
      className={!!selectedProduct ? 'visible' : ''}
      onClick={onClose}
    >
      <div>
        <div className="header">
          <div className="left">
            <img src={image_link} />
            <div>{brand}</div>
            <div>{condition}</div>
            <div>{availability}</div>
          </div>
          <div className="right">
            <div className="title">{title}</div>
            <div className="dsc">{description}</div>
            <PriceDetail price={price} shipping={shipping} />
          </div>
        </div>
        <div className="close" onClick={onClose}>X</div>
      </div>
    </ProductModalWrapperStyled>
  );
}