import { ReactComponent as Settingsicon } from '../../img/icons/cog-6-tooth.svg';
import { ReactComponent as Logouticon } from '../../img/icons/arrow-right-on-rectangle.svg';
import { UserLogoModalStyled } from './UserLogoModal.styled';
import { useState } from 'react';
import { UserInfoModal } from 'components/UserInfoModal/UserInfoModal';
import { UserLogoutModal } from 'components/UserLogoutModal/UserLogoutModal';

export function UserLogoModal({ setIsActiveLogoModal }) {
  const [isActiveUserInfoModal, setIsActiveUserInfoModal] = useState(false);
  const [isActiveLogoutModal, setIsActiveLogoutModal] = useState(false);

  const handleCloseModal = () => {
    setIsActiveUserInfoModal(false);
    setIsActiveLogoutModal(false);
    setIsActiveLogoModal();
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
          <Logouticon className="svg" width={16} height={16} />
          <p>Log out</p>
        </button>
      </UserLogoModalStyled>
      {isActiveUserInfoModal && (
        <UserInfoModal handleCloseModal={handleCloseModal} />
      )}
      {isActiveLogoutModal && (
        <UserLogoutModal handleCloseModal={handleCloseModal} />
      )}
    </>
  );
}
