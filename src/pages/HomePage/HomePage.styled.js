import styled from 'styled-components';
import bg_waves_desk from '../../img/desktop/botle-home.png';
import bg_waves_tab from '../../img/tablet/bottle-home.png';
import bg_waves_mob from '../../img/mobile/bottle-home.png';
import bg_circles_desk from '../../img/desktop/background-el-main.png';
import bg_circles_tab from '../../img/tablet/background-el-home.png';
import bg_circles_mob from '../../img/mobile/background-el-home.png';

export const Wrapper = styled.section`
  margin-top: 24px;

  @media screen and (min-width: 768px) {
    margin-top: 40px;
    /* min-height: calc(100vh - 65px); */

    @media screen and (min-width: 1440px) {
      background-image: url(${bg_circles_desk});
      background-size: auto;
      background-position: top 40px center;
      background-repeat: no-repeat;
    }
  }
`;

export const WrapperLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 232px;
  background-size: auto;
  background-position: top 106px center, top 30px center;
  background-repeat: no-repeat;
  background-image: url(${bg_waves_mob}), url(${bg_circles_mob});

  @media screen and (min-width: 768px) {
    gap: 334px;
    background-image: url(${bg_waves_tab}), url(${bg_circles_tab});
    background-size: auto;
    background-position: top 40px center, top center;
    background-repeat: no-repeat;
  }

  @media screen and (min-width: 1440px) {
    gap: 466px;
    background-image: url(${bg_waves_desk}), url(${bg_circles_desk});
    background-size: auto;
    background-position: top center, top 40px center;
    background-repeat: no-repeat;
  }
`;

export const WrapperRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 768px) {
    gap: 12px;
  }
`;

export const ContainerWr = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    gap: 32px;
  }
`;
