import usersvg from '../../img/icons/user.svg';
import { ReactComponent as ArrowIcon } from '../../img/icons/chevron-double-up.svg';
import { UserLogoStyled } from './UserLogo.styled';
import { useState } from 'react';
import { UserLogoModal } from 'components/UserLogoModal/UserLogoModal';

export function UserLogo() {
  const [isActiveLogoModal, setIsActiveLogoModal] = useState(false);

  const handleLogoModal = e => {
    setIsActiveLogoModal(!isActiveLogoModal);
  };

  return (
    <UserLogoStyled>
      <button onClick={handleLogoModal}>
        <p>david</p>
        <img width={28} height={28} src={usersvg} alt="user-img" />
        <ArrowIcon width={16} height={16} />
      </button>
      {isActiveLogoModal && (
        <UserLogoModal setIsActiveLogoModal={handleLogoModal} />
      )}
    </UserLogoStyled>
  );
}
