import { Link } from 'react-router-dom';
import logo from '../../img/logo.png';

export function Logo() {
  return (
    <Link to="/">
      <img src={logo} alt="Logo" width={102} height={48} />
    </Link>
  );
}
