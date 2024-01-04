import { useDispatch } from 'react-redux';
import {
  deleteWatter,
  editWater,
} from '../../redux/waterConsumptionOperations';
import {
  ListItem,
  WrapperForParagrapher,
  PagagrapherForAmount,
  PagagrapherForTime,
  BTN,
} from './TodayWaterListItemInfo.styled';

import pencilSquare from '../../img/icons/pencilSquare.svg';
import trash from '../../img/icons/trash.svg';
import cup from '../../img/icons/cup.svg'

export function TodayWaterListItemInfo({ record }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteWatter(record.id));
  };

  const handleUpdate = () => {
    dispatch(editWater(record));
  };

  return (
      <ListItem>
        <img src={cup} alt="cup" width={36} height={36} />
        <WrapperForParagrapher>
          <PagagrapherForAmount>{record.milliliters}</PagagrapherForAmount>
          <PagagrapherForTime>{record.time}</PagagrapherForTime>
        </WrapperForParagrapher>
        <div>
          <BTN onClick={handleUpdate}>
            <img src={pencilSquare} alt="pencil-square" />
          </BTN>
          <BTN onClick={handleDelete}>
            <img src={trash} alt="trash" />
          </BTN>
        </div>
      </ListItem>
  );
}
