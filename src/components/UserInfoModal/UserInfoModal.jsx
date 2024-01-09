import { BackDropStyled, SettingContainerStyled } from './UserInfoModal.styled';
import { ReactComponent as CloseIcon } from '../../img/icons/close-icon.svg';
import { ReactComponent as UploadIcon } from '../../img/icons/arrow-up-tray.svg';
import { ReactComponent as EyeSlash } from '../../img/icons/eye-slash.svg';
import defaultPhoto from '../../img/Default-photo.png';
import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

export function UserInfoModal({ handleCloseModal }) {
  const imgRef = useRef();

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
  return createPortal(
    <>
      <BackDropStyled onClick={handleCloseModal}></BackDropStyled>
      <SettingContainerStyled>
        <div>
          <p>Setting</p>
          <CloseIcon width={12} height={12} onClick={handleCloseModal} />
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
          <div className="under-photo-container">
            <div className="input-container">
              <div className="gender-container">
                <p>Your gender identity</p>
                <div>
                  <input type="radio" id="girl" name="gender"></input>
                  <label htmlFor="girl">Girl</label>
                  <input type="radio" id="man" name="gender"></input>
                  <label htmlFor="man">Man</label>
                </div>
              </div>

              <div className="input-text">
                <p>Your name</p>
                <input type="text" id="name" placeholder="Your name" />
              </div>

              <div className="input-text">
                <p>E-mail</p>
                <input type="text" id="email" placeholder="Email" />
              </div>
            </div>
            <div className="input-container">
              <p>Password</p>
              <div className="password-input-container">
                <p>Outdated password</p>
                <div className="password-input">
                  <input type="password" placeholder="Password" />
                  <EyeSlash />
                </div>
                <p>New Password</p>
                <div className="password-input">
                  <input type="password" placeholder="Password" />
                  <EyeSlash />
                </div>
                <p>Repeat new password</p>
                <div className="password-input">
                  <input type="password" placeholder="Password" />
                  <EyeSlash />
                </div>
                <div></div>
              </div>
            </div>
          </div>

          <button className="btn">Save</button>
        </form>
      </SettingContainerStyled>
    </>,
    document.getElementById('modal_addWater-root')
  );
}
