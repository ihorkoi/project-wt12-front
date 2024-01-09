import { useDispatch } from 'react-redux';
import {
  deletetWaterRecord,
  editWaterRecord,
  getTodayWater,
} from '../../redux/water/waterOperations.js';
import {
  ListItem,
  WrapperForParagrapher,
  PagagrapherForAmount,
  PagagrapherForTime,
  BTN,
  ButtonWrappper,
} from './TodayWaterListItemInfo.styled';

import pencilSquare from '../../img/icons/pencilSquare.svg';
import trash from '../../img/icons/trash.svg';
import cup from '../../img/icons/cup.svg'

export function TodayWaterListItemInfo({ record }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deletetWaterRecord(record._id));
  };

  const handleUpdate = () => {
    dispatch(editWaterRecord(record));
  };

  return (
    <ListItem key={record._id}>
      <WrapperForParagrapher>
        <img src={cup} alt="cup" width={36} height={36} />
        <PagagrapherForAmount>{record.waterAmount} ml</PagagrapherForAmount>
        <PagagrapherForTime>{record.time}</PagagrapherForTime>
      </WrapperForParagrapher>
      <ButtonWrappper>
        <BTN onClick={handleUpdate}>
          <img src={pencilSquare} alt="pencil-square" />
        </BTN>
        <BTN onClick={handleDelete}>
          <img src={trash} alt="trash" />
        </BTN>
      </ButtonWrappper>
    </ListItem>
  );
}
