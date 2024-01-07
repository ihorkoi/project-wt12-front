import styled from "styled-components";

export const WaterPanelWrapper = styled.div`
max-height:840px;
width:280px;
margin: 0 auto;
border-radius:10px;
padding:24px 8px;
background-color: var(--secondary-verylightblue);
box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.30);
@media screen and (min-width: 768px) {
    max-height:690px;
    width:704px;
    padding:32px 24px;
  }
@media screen and (min-width: 1440px) {
   max-height:680px;
   width:592px;
}
`