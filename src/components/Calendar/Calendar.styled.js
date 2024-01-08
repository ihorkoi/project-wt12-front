import styled from "styled-components";

export const CalendarTitle = styled.p`
  color: var(--primary-black);
  font-size: 26px;
  font-weight: 500;
  line-height: 1.25;`

export const PickerWrapper = styled.div`
  display: flex;
  margin-bottom:16px;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 768px) {
  
  }
  `

export const DaysList = styled.ul`
display:flex;
flex-wrap:wrap;
width:320px;
height:272px;
column-gap:26px;
@media screen and (min-width: 768px) {
    width:646px;
    column-gap:34px;
  }
@media screen and (min-width: 1440px) {
   width:538px;
   column-gap:22px;
}
`
