import usersvg from '../../img/icons/user.svg';
import { ReactComponent as ArrowIcon } from '../../img/icons/chevron-double-up.svg';
import { UserLogoStyled } from './UserLogo.styled';
import { useState } from 'react';
import { UserLogoModal } from 'components/UserLogoModal/UserLogoModal';

export function UserLogo() {
  const [isActiveModal, setIsActiveModal] = useState(false);

  const onClickHandler = e => {
    setIsActiveModal(!isActiveModal);
  };
  return (
    <UserLogoStyled>
      <button onClick={onClickHandler}>
        <p>david</p>
        <img width={28} height={28} src={usersvg} alt="user-img" />
        <ArrowIcon width={16} height={16} />
      </button>
      {isActiveModal && <UserLogoModal setIsActiveModal={onClickHandler} />}
    </UserLogoStyled>
  );
}
