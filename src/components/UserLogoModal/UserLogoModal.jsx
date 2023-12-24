import { ReactComponent as Settingsicon } from '../../img/icons/cog-6-tooth.svg';
import { ReactComponent as Logouticon } from '../../img/icons/arrow-right-on-rectangle.svg';
import { UserLogoModalStyled } from './UserLogoModal.styled';
import { useState } from 'react';
import { UserInfoModal } from 'components/UserInfoModal/UserInfoModal';

export function UserLogoModal({ setIsActiveModal }) {
  const [isActiveUserInfoModal, setIsActiveUserInfoModal] = useState(false);
  const [isActiveLogoutModal, setIsActiveLogoutModal] = useState(false);

  const handleCloseModal = () => {
    setIsActiveUserInfoModal(false);
    setIsActiveModal();
  };

  const hanleOpenModal = callback => {
    callback(true);
  };

  return (
    <>
      <UserLogoModalStyled>
        <button onClick={() => hanleOpenModal(setIsActiveUserInfoModal)}>
          <Settingsicon width={16} height={16} />
          <p>Setting</p>
        </button>
        <button onClick={() => hanleOpenModal(setIsActiveLogoutModal)}>
          <Logouticon width={16} height={16} />
          <p>Log out</p>
        </button>
      </UserLogoModalStyled>
      {isActiveUserInfoModal && (
        <UserInfoModal handleCloseModal={handleCloseModal} />
      )}
    </>
  );
}
