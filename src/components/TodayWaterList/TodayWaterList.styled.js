import styled from 'styled-components';

export const MainWrapper = styled.div`
  width: 264px;
  height: 258px;
  // padding-top: 16px;

  @media screen and (min-width: 768px) {
    width: 656px;
    height: 260px;
    // padding-top: 32px;
  }

  @media screen and (min-width: 1440px) {
    width: 544px;
    height: 260px;
  }
`;

export const Paragrapher = styled.p`
  color: #2f2f2f;
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    font-size: 26px;
    line-height: 1.23;
  }
`;

export const List = styled.ul`
  /* display: flex; */
  height:150px;
  margin-bottom: 12px;
  overflow-y:scroll;
  //  scrollbar-color: red orange;
  &::-webkit-scrollbar {
    width: 4px;
    border-radius: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color:var(--secondary-textcolor);
    border-radius: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background-color:  var(--secondary-lighblue);
    border-radius: 8px;
  }

  
`;

export const BTN = styled.button`
  background: none;
  border: none;
  color: #407bff;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.33;
  padding: 0;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

export const WrapperForBTN = styled.div`
display: flex;
margin-bottom: 24px;
  button{
    background: inherit;
  span{    
    color: var(--primary-color);
    }
  }
`;


export const Img = styled.img`
margin-right: 8px;
`

export const PagagrapherForEmpty = styled.p`
  color: #2f2f2f;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.33;
`;

