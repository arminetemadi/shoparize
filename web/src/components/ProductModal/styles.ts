import styled from 'styled-components';

export const ProductModalWrapperStyled = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-inde: 2;
  display: none;
  background: ${props => props.theme.darkShadow};
  &.visible {
    display: block;
  }
  > div {
    border-radius: 5px;
    margin: 20px auto 0;
    width: 80%;
    background: ${props => props.theme.white};
    text-align: left;
    padding: 20px;
    position: relative;
    .close {
      position: absolute;
      color: ${props => props.theme.gray};
      font-size: 1.5rem;
      top: 0;
      right: 5px;
      cursor: pointer;
      &:hover {
        color: ${props => props.theme.black};
      }
    }
    .header {
      display: flex;
      flex-flow: row wrap;
      .left {
        flex: 1 0 25%;
        align-self: auto;
        max-width: calc(25% -  1em);
        img {
          width: 100%;
        }
      }
      .right {
        flex: 1 0 75%;
        align-self: auto;
        max-width: calc(75% -  1em);
        padding-left: 10px;
        > div {
          margin: 7px 0;
        }
        .title {
          font-size: 1.5rem;
          font-weight: bold;
          text-align: left;
        }
        .dsc {
          text-align: justify;
        }
      }
    }
  }
`;
