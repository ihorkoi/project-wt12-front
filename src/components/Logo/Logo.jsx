import { Link } from 'react-router-dom';
import { ReactComponent as LogoIcon } from '../../img/logo.svg';

export function Logo() {
  return (
    <Link to="/">
      <LogoIcon />
    </Link>
  );
}
