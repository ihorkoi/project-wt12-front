import styled from 'styled-components';

export const HeaderStyled = styled.header`
  display: flex;
  max-width: 1216px;
  margin: 0 auto;
  padding-top: 8px;
  padding-inline: 20px;
  @media screen and (min-width: 768px) {
    padding-top: 16px;
    padding-inline: 32px;
  }
  @media screen and (min-width: 1216px) {
    padding-top: 12px;
    padding-inline: 0;
  }
`;
