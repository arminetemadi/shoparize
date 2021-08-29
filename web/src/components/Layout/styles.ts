import styled from 'styled-components';

export const LayoutStyled = styled.div`
  background: ${props => props.theme.lightGray};
  min-height: 100vh;
  .loading {
    font-size: 14px;
    padding: 5px 10px;
    box-shadow: 0 0 5px 1px ${props => props.theme.darkShadow};
    color: ${props => props.theme.gray};
    text-align: center;
    position: fixed;
    bottom: 0;
    width: 100px;
    background: ${props => props.theme.lightGray};
    left: calc(50% - 50px);
    display: none;
    &.visible {
      display: block;
    }
  }
`;