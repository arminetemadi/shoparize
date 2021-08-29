import styled from 'styled-components';

export const LayoutStyled = styled.div`
  background: ${props => props.theme.lightGray};
  min-height: 100vh;
  .loading {
    border-radius: 5px;
    font-size: 12px;
    padding: 5px 10px;
    box-shadow: 0 0 2px 1px ${props => props.theme.darkShadow};
    color: ${props => props.theme.white};
    text-align: center;
    position: fixed;
    bottom: 0;
    width: 80px;
    background: ${props => props.theme.secondary};
    left: calc(50% - 40px);
    display: none;
    &.visible {
      display: block;
    }
  }
`;