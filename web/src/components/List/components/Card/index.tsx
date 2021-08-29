import { useMemo } from 'react';
import { CardWrapper, CardItem } from './styles';
import { Product } from 'types';
import { DESCRIPTION_LIMIT } from '../../../../constants';
import PriceDetail from 'components/PriceDetail';

type Props = {
  product: Product;
  onSelectProduct: (product: Product | null) => void;
};

function Card({ product, onSelectProduct }: Props) {
  const { title, description, image_link, price, shipping, availability } = product;
  const disabled = availability !== 'in stock';

  const trimmedDsc = useMemo(() => {
    let result = description.substr(0, DESCRIPTION_LIMIT);
    let lastSpace = result.lastIndexOf(' ');
    lastSpace = (lastSpace <= 0) ? DESCRIPTION_LIMIT : lastSpace;
    result = result.substr(0, Math.min(DESCRIPTION_LIMIT, lastSpace));
    result = (description.length > DESCRIPTION_LIMIT) ? `${result}...` : result;

    return result;
  }, [description]);

  return (
    <CardWrapper>
      <CardItem onClick={() => onSelectProduct(product)}>
        <div className="image">
          <img src={image_link} alt={title} />
        </div>
        <div className="title" title={title}>{title}</div>
        <div className="dsc" title={description}>{trimmedDsc}</div>
        <PriceDetail price={price} shipping={shipping} />
        <button disabled={disabled}>
          {disabled ? 'Out Of Stock' : 'Buy'}
        </button>
      </CardItem>
    </CardWrapper>
  )
}

export default Card;