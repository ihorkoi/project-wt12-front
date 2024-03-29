import styled from 'styled-components';
import { ReactComponent as PlusCircle } from '../../img/icons/plus-circle.svg';
import { ReactComponent as Elipse } from '../../img/icons/ellipse2.svg';

export const ContainerTodayWater = styled.div`
  display: block;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    display: flex;
    gap: 32px;
  }

  @media (min-width: 1440px) {
    gap: 43px;
  }
`;

export const RangeWrapper = styled.div`
  display: block;
  align-items: flex-start;
  width: 280px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 52px;

  @media (min-width: 768px) {
    gap: 16px;
    width: 356px;
    margin-left: 0;
    margin-right: 0;
  }

  @media (min-width: 1440px) {
    width: 391px;
  }
`;

export const TodayRange = styled.h3`
  color: var(--primary-color);
  text-align: start;
  font-family: Roboto;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
  margin-bottom: 8px;

  @media (min-width: 768px) {
    margin-bottom: 16px;
  }
`;

export const Range = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  height: 8px;
  flex-shrink: 0;
  border-radius: 10px;
  background: var(--secondary-lighblue);

  &.active {
    background: var(--secondary-textcolor);
  }
`;

export const Range1 = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  height: 8px;
  flex-shrink: 0;
  border-radius: 10px;
  background: var(--secondary-lighblue);
  margin-top: 16px;
`;

export const RangeList = styled.ul`
  display: flex;
  width: 280px;
  justify-content: space-between;
  margin-top: 24px;

  @media (min-width: 768px) {
    width: 356px;
  }

  @media (min-width: 1440px) {
    width: 391px;
  }
`;

export const RangeItem = styled.li`
  color: var(--primary-color);
  text-align: center;
  font-family: Roboto;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.33;

  &.active {
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.25;
  }
`;

export const Button = styled.div`
  display: block;
  padding: 6px 76px;
  width: 280px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  background: var(--primary-color);
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    display: inline-flex;
    margin: auto 0;
    width: 336px;
  }

  @media (min-width: 1440px) {
    padding: 10px 30px;
    width: 178px;
  }
`;

export const WrapperTextBtn = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`;

export const SpanText = styled.span`
  color: var(--primary-white);
  text-align: center;
  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
  width: 128px;

  @media (min-width: 768px) {
    width: 94px;
  }
`;

export const Plus = styled(PlusCircle)`
  width: 24px;
  height: 24px;
  margin-top: auto;
  margin-bottom: auto;
  margin-right: 10px;
  stroke: var(--primary-white);
  color: #fff;
  background-color: transparent;
`;

export const CircleIcon = styled(Elipse)`
  position: relative;
  top: -50%;
  width: 14px;
  height: 14px;
  stroke-width: 1px;
  color: black;
`;

export const RangeInput = styled.input`
  -webkit-appearance: none;
  width: 100%;
  height: 8px;
  border-radius: 5px;
  background:var(--secondary-lighblue);
  outline: none;
  opacity: 0.7;
  transition: opacity 0.2s;

  @media screen and (min-width: 768px) {
    margin-top: 16px;
    width: 325px;
  }
  @media screen and (min-width: 1440px) {
    width: 360px;
  }
  &:hover {
    opacity: 1;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background:var(--secondary-lighblue)
    border: 2px solid
    cursor: pointer;
    transform: translateY(-20%);
  }
  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 8px;
    background: linear-gradient(to right
      var(--secondary-textcolor) 0%,
      var(--secondary-lighblue) 100%);
    border-radius: 5px;
    border: none;
    cursor: pointer;
    position: relative;
    z-index: 0;
  }

  &::after {
    content: '';
    width: 1px;
    height: 8px;
    background:var(--secondary-lighblue)
    position: absolute;
    top: 360px;
    transform: translateY(-50%);
    left: 10px;
    z-index: -1;
    @media screen and (min-width: 768px) {
      top: 555px;
    }
    @media screen and (min-width: 1440px) {
      top: 685px;
    }
  }
  &::before {
    content: '';
    width: 1px;
    height: 8px;
    background:var(--secondary-lighblue)
    position: absolute;
    top: 360px;
    transform: translateY(-50%);
    left: 132px;
    z-index: -1;
    @media screen and (min-width: 768px) {
      left: 170px;
      top: 555px;
    }
    @media screen and (min-width: 1440px) {
      top: 685px;
      left: 190px;
    }
  }
`;
