import styled from 'styled-components';

export const HeaderStyled = styled.header`
  padding: 15px 50px;
  .navigation {
    display: flex;
    gap: 20px;
    border-bottom: 1px solid gray;
  }
  .btn {
    text-decoration: none;
    font-size: 32px;
    font-weight: 500;
  }
  .active {
    color: red;
  }
`;
