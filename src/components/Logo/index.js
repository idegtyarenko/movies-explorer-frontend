import { Link } from 'react-router-dom';

import logo from '../../images/logo.svg';

export default function Logo() {
  return (
    <Link to="/">
      <img src={logo} alt='Логотип «Смотрим»' className='logo'></img>
    </Link>
  );
}
