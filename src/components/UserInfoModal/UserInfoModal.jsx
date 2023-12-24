import { BackDropStyled, SettingContainerStyled } from './UserInfoModal.styled';
import { ReactComponent as CloseIcon } from '../../img/icons/close-icon.svg';
import { ReactComponent as UploadIcon } from '../../img/icons/arrow-up-tray.svg';
import usersvg from '../../img/icons/user.svg';

export function UserInfoModal({ handleCloseModal }) {
  return (
    <>
      <BackDropStyled onClick={() => handleCloseModal()}></BackDropStyled>
      <SettingContainerStyled>
        <div>
          <p>Setting</p>
          <CloseIcon width={12} height={12} />
        </div>
        <form>
          <p>Your photo</p>
          <div className="photo-container">
            <img src={usersvg} width={80} height={80} alt="user-img" />
            <input type="file" id="file" hidden />
            <label className="label-file" htmlFor="file">
              <UploadIcon width={12} height={12} />
              <p>Upload a photo</p>
            </label>
          </div>
        </form>
      </SettingContainerStyled>
    </>
  );
}
