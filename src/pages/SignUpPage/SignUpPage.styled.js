import styled from 'styled-components';
import bg_waves_desk from '../../img/desktop/background-el-main.png';
import bg_waves_mob from '../../img/mobile/background-el-sign-in.png';
import bg_waves_tab from '../../img/tablet/bottle-sign-in.png';
import botle from '../../img/desktop/bottle-sign-in.png';

export const Wrapper = styled.div`
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
    background-image: url(${botle}), url(${bg_waves_desk});
    background-size: contain;
    background-position: left;
    background-repeat: no-repeat;
  }
`;
