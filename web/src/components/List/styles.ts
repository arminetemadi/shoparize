import styled from 'styled-components';

export const ListWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
	display: flex;
  flex-flow: row wrap;
  .empty {
    padding: 30px 20px;
    margin: 30px auto;
    font-size: 1.5rem;
    color: ${props => props.theme.gray};
  }
`;
