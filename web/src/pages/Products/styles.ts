import styled from 'styled-components';

export const SearchStyled = styled.div`
  width: 85%;
  margin: 30px auto 20px;
  display: flex;
	flex-flow: row wrap;
  input {
    border: 1px solid ${props => props.theme.secondary};
    border-right: 0 none;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    flex: 1 0 80%;
    align-self: auto;
    max-width: 80%;
    height: 40px;
    padding: 5px 10px;
    font-size: 1rem;
    &:focus {
      + button {
        color: ${props => props.theme.white};
        background: ${props => props.theme.secondary};
      }
    }
  }
  button {
    border: 1px solid ${props => props.theme.secondary};
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    color: ${props => props.theme.secondary};
    background: ${props => props.theme.lightGray};
    font-size: 1.5rem;
    font-weight: bold;
    flex: 1 0 20%;
    align-self: auto;
    max-width: 20%;
    height: 40px;
    padding: 5px 10px;
    cursor: pointer;
  }
  &:hover {
    button {
      color: ${props => props.theme.white};
      background: ${props => props.theme.secondary};
    }
  } 
`;