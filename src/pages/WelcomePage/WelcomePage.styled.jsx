import styled from 'styled-components';
import bg_waves_desk from '../../img/desktop/background-main.png';
import bg_circles_desk from '../../img/desktop/background-el-main.png';
import bg_waves_tab from '../../img/tablet/background-main.png';
import bg_waves_mob from '../../img/mobile/background-main.png';

export const Wrapper = styled.section`
  background-size: cover;
  background-position: bottom center;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  background-image: url(${bg_waves_mob});

  @media screen and (min-width: 768px) {
    width: 100vw;
    height: 100vh;
    background-image: url(${bg_waves_tab});
    background-size: cover;
    background-position: bottom center;
    background-repeat: no-repeat;
  }

  @media screen and (min-width: 1440px) {
    width: 100vw;
    background-image: url(${bg_circles_desk}), url(${bg_waves_desk});
    background-size: contain;
    background-position: bottom center;
    background-repeat: no-repeat;
  }
`;

export const ComponentWrapper = styled.div`
  padding-top: 24px;
  padding-bottom: 40px;

  @media screen and (min-width: 768px) {
    padding-top: 40px;
    padding-bottom: 50px;
  }

  @media screen and (min-width: 1440px) {
    padding: 80px 98px 185px 104px;
    display: flex;
    gap: 81px;
  }
`;
