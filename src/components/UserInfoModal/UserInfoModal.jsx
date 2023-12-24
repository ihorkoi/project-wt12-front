import { BackDropStyled, SettingContainerStyled } from './UserInfoModal.styled';
import { ReactComponent as CloseIcon } from '../../img/icons/close-icon.svg';
import { ReactComponent as UploadIcon } from '../../img/icons/arrow-up-tray.svg';
import defaultPhoto from '../../img/Default-photo.png';
import { useRef } from 'react';

export function UserInfoModal({ handleCloseModal }) {
  const imgRef = useRef();
  const handleFileChange = e => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const imgUrl = reader.result;
        imgRef.current.src = imgUrl;
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <>
      <BackDropStyled onClick={() => handleCloseModal()}></BackDropStyled>
      <SettingContainerStyled>
        <div>
          <p>Setting</p>
          <CloseIcon
            width={12}
            height={12}
            onClick={() => handleCloseModal()}
          />
        </div>
        <form>
          <p>Your photo</p>
          <div className="photo-container">
            <img
              ref={imgRef}
              src={defaultPhoto}
              width={80}
              height={80}
              alt="user-img"
            />
            <input
              type="file"
              id="file"
              hidden
              onChange={handleFileChange}
              accept="image/png, image/jpeg, image/jpg"
            />
            <label className="label-file" htmlFor="file">
              <UploadIcon width={16} height={16} />
              <p>Upload a photo</p>
            </label>
          </div>
        </form>
      </SettingContainerStyled>
    </>
  );
}
