import styled from 'styled-components';

export const PriceDetailStyled = styled.div`
  margin-top: 20px;
  .price {
    font-size: 2rem;
    margin-right: 10px;
  }
  .shipping {
    color: ${props => props.theme.gray};
    font-size: 1rem;
  }
  .currency {
    font-size: 0.8em;
    margin: 0 5px;
  }
`;