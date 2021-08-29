import styled from 'styled-components';

export const CardWrapper = styled.div`
  padding: 15px 20px;
  text-align: center;
  flex: 1 0 25%;
  align-self: auto;
  max-width: 25%;
  @media only screen and (max-width: 1200px) {
    flex: 1 0 50%;
    max-width: 50%;
  }
  @media only screen and (max-width: 768px) {
    flex: 1 0 100%;
    max-width: 100%;
  }
`;

export const CardItem = styled.div`
  background: ${props => props.theme.white};
  border-radius: 10px;
  box-shadow: 0 0 8px 3px ${props => props.theme.lightShadow};
  height: 510px;
  cursor: pointer;
  img {
    margin-top: 10px;
    max-width: 200px;
  }
  .title {
    font-weight: bold;
    font-size: 1.1rem;
    text-overflow: ellipsis;
    max-width: 90%;
    white-space: nowrap;
    overflow: hidden;
    text-align: center;
    margin: 30px auto 15px;
  }
  .dsc {
    font-size: 12px;
    margin: 20px auto 40px;
    max-width: 90%;
    text-align: justify;
    height: 15%;
  }
  button {
    color: ${props => props.theme.secondary};
    border: 2px solid ${props => props.theme.secondary};
    border-radius: 25px;
    padding: 7px 40px;
    font-size: 1.2rem;
    background: ${props => props.theme.white};
    font-weight: bold;
    text-transform: uppercase;
    width: 85%;
    margin: 20px auto 10px;
  }
  &:hover {
    background: ${props => props.theme.primary};
    color: ${props => props.theme.white};
    box-shadow: 0 6px 9px 0 ${props => props.theme.darkShadow};
    .shipping {
      color: ${props => props.theme.lightGray};
    }
    button {
      color: ${props => props.theme.white};
      background: ${props => props.theme.secondary};
      box-shadow: 0 6px 9px 0 ${props => props.theme.darkShadow};
    }
  }
`;