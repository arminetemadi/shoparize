import Styled from 'styled-components';
// import { PredictedProp } from 'types';

export const StyledErrorWrapper = Styled.main`
  width: 100%;
  margin-top: 40px;
  background: ${props => props.theme.white};
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  user-select: none;
`;

export const StyledErrorIcon = Styled.div`
  width: 100%;
  height: 80px;
  color: ${props => props.theme.gray};
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 118px !important;
    height: 118px !important;
    color: ${props => props.theme.blue};
  }
  
  #debug {
    width: 98px !important;
    height: 98px !important;
  }
`;

export const StyledErrorTitle = Styled.div`
  font-weight: 600;
  font-size: 20px;
  color: ${props => props.theme.gray};
`;

export const StyledErrorMessage = Styled.div`
  font-size: 10px;
  margin: 20px;
  color: ${props => props.theme.gray};
  text-align: center;
  line-height: 20px;
`;

export const StyledErrorAction = Styled.div`
  margin-top: 20px;
  margin-bottom: 10px;
  display: flex;
  button {
    font-size: 10px;
    height: 40px;
    margin-left: 10px;
  }
`;

export const StyledErrorDetails = Styled.pre`
  background: ${props => props.theme.black};
  color: ${props => props.theme.white};
  direction: ltr;
  font-size: 10px;
  font-family: monospace;
  text-align: left;
  margin-top: 10px;
  padding: 10px;
  width: 100%;
  user-select: text;
`;
