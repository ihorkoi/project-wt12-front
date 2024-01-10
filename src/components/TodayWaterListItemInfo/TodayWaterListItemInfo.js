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
import { DeleteEntity } from 'components/DeleteEntity/DeleteEntry.jsx';

export function TodayWaterListItemInfo({ record }) {

  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);

  const handleDelete = () => {
    setDeleteModalIsOpen(prevState => !prevState)

  };

  const handleUpdate = () => {
    setEditModalIsOpen(true)
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
        {deleteModalIsOpen && <DeleteEntity handleCloseModal={() => setDeleteModalIsOpen(false)} id={record._id} />}
      </ButtonWrappper>
    </ListItem>
  );
}
