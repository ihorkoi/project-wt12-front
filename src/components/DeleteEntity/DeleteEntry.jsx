import { BackDropStyled, LogoutContainerStyled } from './DeleteEntry.styled.js';
import { ReactComponent as CloseIcon } from '../../img/icons/close-icon.svg';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/auth/authOperations';
import { createPortal } from 'react-dom';
import { deletetWaterRecord } from '../../redux/water/waterOperations.js';

export function DeleteEntity({ handleCloseModal, id }) {
  const dispatch = useDispatch();
  useEffect(() => {
    const handleKeyPress = event => {
      if (event.key === 'Escape') {
        handleCloseModal();
      }
    };
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleCloseModal]);

  const handleLogOut = () => {
    dispatch(deletetWaterRecord(id));
    handleCloseModal(false);
  };

  return createPortal(
    <>
      <BackDropStyled onClick={handleCloseModal}></BackDropStyled>
      <LogoutContainerStyled>
        <div className="title-container">
          <p className="title">Delete entry</p>
          <CloseIcon onClick={handleCloseModal} />
        </div>
        <p className="question">Are you sure you want to delete the entry?</p>
        <div className="btn-container">
          <button className="cancel-btn" onClick={handleCloseModal}>
            Cancel
          </button>
          <button className="logout-btn" onClick={handleLogOut}>
            Delete
          </button>
        </div>
      </LogoutContainerStyled>
    </>,
    document.getElementById('modal_addWater-root')
  );
}
