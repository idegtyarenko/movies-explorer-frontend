import Logo from '../Logo';
import Navigation from '../Navigation';

export default function Header() {
  return(
    <header className="header">
      <div className="header__content">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}

// <AccountButton />
// <MenuButton />
// <AuthButtons />
