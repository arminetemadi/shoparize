import { CardWrapper, CardItem } from './styles';
import { Product } from 'types';
import PriceDetail from 'components/PriceDetail';

type Props = {
  product: Product;
  onSelectProduct: (product: Product | null) => void;
};

function Card({ product, onSelectProduct }: Props) {
  const { title, description, image_link, price, shipping, availability } = product;
  const disabled = availability !== 'in stock';

  const truncate = (text: string, limit: number) => {
    let result = text.substr(0, limit);
    let lastSpace = result.lastIndexOf(' ');
    lastSpace = (lastSpace <= 0) ? limit : lastSpace;
    result = result.substr(0, Math.min(limit, lastSpace));
    result = (text.length > limit) ? `${result}...` : result;

    return result;
  }

  return (
    <CardWrapper>
      <CardItem onClick={() => onSelectProduct(product)}>
        <div className="image">
          <img src={image_link} />
        </div>
        <div className="title" title={title}>{title}</div>
        <div className="dsc" title={description}>{truncate(description, 300)}</div>
        <PriceDetail price={price} shipping={shipping} />
        <button disabled={disabled}>
          {disabled ? 'Not Available' : 'Buy'}
        </button>
      </CardItem>
    </CardWrapper>
  )
}

export default Card;