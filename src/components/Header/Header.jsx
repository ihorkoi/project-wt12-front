import { Logo } from 'components/Logo/Logo';
import { UserLogo } from 'components/UserLogo/UserLogo';
import { HeaderStyled } from './Header.styled';
import { UserAuth } from 'components/UserAuth/UserAuth';

export function Header() {
  const isLogedIn = true; //useSelector(isLoggedInSelector);
  return (
    <HeaderStyled>
      <Logo />
      {!isLogedIn ? <UserAuth /> : <UserLogo />}
    </HeaderStyled>
  );
}
