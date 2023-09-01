import styled from 'styled-components';

export const SectionStyled = styled.section`
  .list {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    list-style: none;

    & h3,
    h2 {
      margin: 0;
    }
  }
  img {
  }
  .item {
    width: 350px;
  }
`;
