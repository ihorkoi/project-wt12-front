import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getTodayWater,
  addWaterRecord,
} from '../../redux/water/waterOperations.js';
import {
  selectTodayWater,
  selectIsLoading,
  selectError,
} from '../../redux/selectors';
import { TodayWaterListItemInfo } from '../TodayWaterListItemInfo/TodayWaterListItemInfo.js';
import {
  Paragrapher,
  List,
  BTN,
  WrapperForBTN,
  Img,
  MainWrapper,
  PagagrapherForEmpty,
} from './TodayWaterList.styled.js';
import plus from '../../img/icons/plus-small.svg';

export function TodayWaterList() {
  const waterConsumptions = useSelector(selectTodayWater);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodayWater());
  }, [dispatch]);

  const handleAddWater = () => {
    const currentTime = new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });

    dispatch(addWaterRecord({ waterAmount: 250, time: currentTime }));
  };

  return (
    <MainWrapper>
      <Paragrapher>Today</Paragrapher>
      <List>
        {isLoading && !error ? (
          <PagagrapherForEmpty>please waite</PagagrapherForEmpty>
        ) : waterConsumptions.length === 0 && !error ? (
          <PagagrapherForEmpty>
            You haven't drunk water yet. <br />
            Drink some water.
          </PagagrapherForEmpty>
        ) : (
          waterConsumptions.map(({ id, time, waterAmount }) => (
            <TodayWaterListItemInfo
              key={id}
              record={{ id, waterAmount, time }}
            />
          ))
        )}
      </List>
      <WrapperForBTN>
        <Img src={plus} alt="plus" height={24} width={24} />
        <BTN onClick={handleAddWater}>Add water</BTN>
      </WrapperForBTN>
    </MainWrapper>
  );
}
