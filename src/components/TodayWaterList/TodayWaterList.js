import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTodayWater } from '../../redux/water/waterOperations.js';
import {
  selectTodayWater,
  selectIsLoading,
  selectError,
} from '../../redux/selectors';
import { TodayWaterListItemInfo } from '../TodayWaterListItemInfo/TodayWaterListItemInfo.js';
import {
  Paragrapher,
  List,
  // BTN,
  WrapperForBTN,
  Img,
  MainWrapper,
  PagagrapherForEmpty,
} from './TodayWaterList.styled.js';
import plus from '../../img/icons/plus-small.svg';
import { AddWaterModal } from 'components/AddWater/AddWater';


export function TodayWaterList() {
  const waterConsumptions = useSelector(selectTodayWater);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodayWater());
  }, [dispatch]);


  return (
    <MainWrapper>
      <Paragrapher>Today</Paragrapher>
      <List>
        {isLoading && !error ? (
          <PagagrapherForEmpty>Updating...</PagagrapherForEmpty>
        ) : waterConsumptions.length === 0 && !error ? (
          <PagagrapherForEmpty>
            You haven't drunk water yet. <br />
            Drink some water.
          </PagagrapherForEmpty>
        ) : (
          waterConsumptions.map(({ _id, time, waterAmount }) => (
            <TodayWaterListItemInfo
              key={_id}
              record={{ _id, waterAmount, time }}
            />
          ))
        )}
      </List>
      <WrapperForBTN>
        <Img src={plus} alt="plus" height={24} width={24} />
        <AddWaterModal />

      </WrapperForBTN>
    </MainWrapper>
  );
}
