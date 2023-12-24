import { BackDropStyled } from './UserInfoModal.styled';

export function UserInfoModal({ handleCloseModal }) {
  return (
    <BackDropStyled onClick={() => handleCloseModal()}>
      <div>
        <p>Setting</p>
        <form></form>
      </div>
    </BackDropStyled>
  );
}
