import styled from "styled-components";

export const DayWrapper = styled.li`
margin-bottom:16px;
@media screen and (min-width: 768px) {
    margin-bottom:20px;  
}

`

export const Day = styled.div`
width:32px;
height:32px;
padding:7px 6px;
margin-bottom:4px;
background-color:var(--primary-white);
text-align: center;
font-size: 14px;
font-weight: 400;
border-radius:50%;
cursor:pointer;
@media screen and (min-width: 768px) {
    width:34px;
    height:34px;
    font-size: 16px;
    padding:7px;
  }
@media screen and (min-width: 1440px) {
   font-size: 16px;
}
`

export const DayPercent = styled.p`
text-align:center;
color:var( --secondary-textcolor);
font-size: 10px;
font-weight: 400;
line-height: 1.6;
@media screen and (min-width: 768px) {
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.53;

  }
@media screen and (min-width: 1440px) {
   font-size: 12px;
}
`