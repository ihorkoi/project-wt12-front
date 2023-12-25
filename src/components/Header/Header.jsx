import { Logo } from 'components/Logo/Logo';
import { UserLogo } from 'components/UserLogo/UserLogo';
import { HeaderStyled } from './Header.styled';
import { UserAuth } from 'components/UserAuth/UserAuth';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/selectors';

export function Header() {
  const isLogedIn = useSelector(selectIsLoggedIn);
  return (
    <HeaderStyled>
      <Logo />
      {!isLogedIn ? <UserAuth /> : <UserLogo />}
    </HeaderStyled>
  );
}
