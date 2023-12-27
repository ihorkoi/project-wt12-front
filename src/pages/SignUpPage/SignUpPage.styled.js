import styled from 'styled-components';
import bg_waves_desk from '../../img/desktop/background-el-main.png';
import bg_waves_mob from '../../img/mobile/background-el-sign-in.png';
// import bg_waves_tab from '../../img/tablet/bottle-sign-in.png';
import botle_desk from '../../img/desktop/bottle-sign-in.png';
import bottle_mob from '../../img/mobile/bottle-sign-in.png';
import bottle_tab from '../../img/tablet/bottle-sign-in.png';

export const Wrapper = styled.div`
  /* min-height: calc(100vh - 64px); */
  background-size: auto;
  background-position: bottom 10px right 50%;
  background-repeat: no-repeat;
  background-image: url(${bottle_mob}), url(${bg_waves_mob});

  @media screen and (min-width: 768px) {
    background-image: url(${bottle_tab}), url(${bg_waves_desk});
    background-size: cover;
    background-position: right bottom;
    background-repeat: no-repeat;
  }

  @media screen and (min-width: 1440px) {
    /* min-height: calc(100vh - 65px); */
    background-image: url(${botle_desk}), url(${bg_waves_desk});
    background-size: contain;
    background-position: left bottom;
    background-repeat: no-repeat;
  }
`;