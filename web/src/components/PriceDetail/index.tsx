import { PriceDetailStyled } from './styles';

type Props = {
  price: string;
  shipping: string;
}

export default function PriceDetail({ price, shipping }: Props) {
  const productPrice = price ? price.split(' ') : ['0.00', 'EUR'];
  const productShipping = shipping ? (shipping.split(':::'))[1].split(' ') : ['0.00', 'EUR'];
  
  return (
    <PriceDetailStyled>
      <span className="price">
        {productPrice[0]} 
        <span className="currency">{productPrice[1]}</span>  
      </span>  
      <span className="shipping">
        + Shipping {productShipping[0]}  
        <span className="currency">{productShipping[1]}</span>
      </span> 
    </PriceDetailStyled>
  );
}