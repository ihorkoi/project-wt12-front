import usersvg from '../../img/icons/user.svg';
import { LinkStyled } from './UserAuth.styled';

export function UserAuth() {
  return (
    <LinkStyled to="/signin">
      <p>Sign in</p>
      <img width={28} height={28} src={usersvg} alt="user-img" />
    </LinkStyled>
  );
}
