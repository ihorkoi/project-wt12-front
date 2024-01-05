import styled from "styled-components";

export const CalendarTitle = styled.p`
  color: var(--primary-black);
  font-size: 26px;
  font-weight: 500;
  line-height: 1.25;`

export const PickerWrapper = styled.div`
  display: flex;
  margin-bottom:16px;
  gap: 102px;
  align-items: center;
  `

export const DaysList = styled.ul`
display:flex;
flex-wrap:wrap;
gap:26px;
`

export const DayWrapper = styled.li`
margin-bottom:16px;
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
line-height: 1.29;
border-radius:50%`

export const DayPercent = styled.p`
text-align:center;
color:var( --secondary-textcolor);
font-size: 10px;
font-weight: 400;
line-height: 1.6;
`