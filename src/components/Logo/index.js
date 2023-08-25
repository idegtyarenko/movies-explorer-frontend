// TODOS:
// Optimize SVG
// link to main page

import logo from '../../images/logo.svg';

export default function Logo() {
  return (
    <img src={logo} alt='Логотип «Смотрим»' className='logo'></img>
  );
}
