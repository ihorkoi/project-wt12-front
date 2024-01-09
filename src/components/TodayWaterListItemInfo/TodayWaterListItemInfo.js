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

import { EditWaterModal } from 'components/EditWater/EditWater.jsx';

import pencilSquare from '../../img/icons/pencilSquare.svg';
import trash from '../../img/icons/trash.svg';
import cup from '../../img/icons/cup.svg'
import { useState } from 'react';

export function TodayWaterListItemInfo({ record }) {

  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deletetWaterRecord(record._id));
  };

  const handleUpdate = () => {
    setEditModalIsOpen(true)
    // dispatch(editWaterRecord(record));
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
        <EditWaterModal modalIsOpen={editModalIsOpen} setIsOpen={setEditModalIsOpen} waterAmount={record.waterAmount} _id={record._id} time={record.time} />
        <BTN onClick={handleDelete}>
          <img src={trash} alt="trash" />
        </BTN>
      </ButtonWrappper>
    </ListItem>
  );
}
