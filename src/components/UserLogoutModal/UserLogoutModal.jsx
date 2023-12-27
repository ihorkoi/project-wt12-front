import {
  BackDropStyled,
  LogoutContainerStyled,
} from './UserLogoutModal.styled';
import { ReactComponent as CloseIcon } from '../../img/icons/close-icon.svg';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/auth/authOperations';

export function UserLogoutModal({ handleCloseModal }) {
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
    dispatch(logout());
    handleCloseModal();
  };

  return (
    <>
      <BackDropStyled onClick={handleCloseModal}></BackDropStyled>
      <LogoutContainerStyled>
        <div className="title-container">
          <p className="title">Log out</p>
          <CloseIcon onClick={handleCloseModal} />
        </div>
        <p className="question">Do you realy want to live?</p>
        <div className="btn-container">
          <button className="cancel-btn" onClick={handleCloseModal}>
            Cancel
          </button>
          <button className="logout-btn" onClick={handleLogOut}>
            Log out
          </button>
        </div>
      </LogoutContainerStyled>
    </>
  );
}
