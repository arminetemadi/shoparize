import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton
} from 'react-share';
import { Product } from 'types';
import { ProductModalWrapperStyled } from './styles';
import PriceDetail from 'components/PriceDetail';

type Props = {
  selectedProduct: Product | null;
  onSelectProduct: (product: Product | null) => void;
}

export default function ProductModal({ selectedProduct, onSelectProduct }: Props) {
  if (!selectedProduct) return (<></>);
  const { title, description, image_link, price, shipping, availability, brand, condition, link } = selectedProduct;

  const onClose = (event: any) => {
      if (
        event.target.className.split(' ').includes('visible') ||
        event.target.className.split(' ').includes('close')
      )
        onSelectProduct(null);
  }

  return (
    <ProductModalWrapperStyled
      className={!!selectedProduct ? 'visible' : ''}
      onClick={onClose}
    >
      <div>
        <div className="header">
          <div className="left">
            <img src={image_link} alt={title} />
          </div>
          <div className="right">
            <div className="title">{title}</div>
            <div>Brand: {brand}</div>
            <div>Condition: {condition}</div>
            <div>Availability: {availability}</div>
            <div className="dsc">{description}</div>
            <div className="share">
              <FacebookShareButton url={link}>
                <img src="/facebook.png" alt="facebook" />
              </FacebookShareButton>
              <LinkedinShareButton url={link}>
                <img src="/linkedin.png" alt="linkedin" />
              </LinkedinShareButton>
              <TwitterShareButton url={link}>
                <img src="/twitter.png" alt="twitter" />
              </TwitterShareButton>
              <WhatsappShareButton url={link}>
                <img src="/whatsapp.png" alt="whatsapp" />
              </WhatsappShareButton>
            </div>
            <PriceDetail price={price} shipping={shipping} />
          </div>
        </div>
        <div className="close" onClick={onClose}>X</div>
      </div>
    </ProductModalWrapperStyled>
  );
}