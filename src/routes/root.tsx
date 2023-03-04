import { FC, PropsWithChildren } from 'react';
import { matchPath, Outlet, useLocation, useMatch } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header, { HeaderStyle } from '../components/Header/Header';
import MobileMenu from '../components/MobileMenu/MobileMenu';
import Navigation from '../components/Navigation/Navigation';

const Root: FC<PropsWithChildren> = () => {
  const location = useLocation();
  const isHeader = ['/', '/movies', '/saved-movies', '/profile'].includes(
    location.pathname
  );

  const isFooter = ['/', '/movies', '/saved-movies'].includes(
    location.pathname
  );

  const isMain = useMatch({ path: '/', end: true }) || undefined;

  return (
    <>
      {isHeader && (
        <Header style={isMain && HeaderStyle.main}>
          <Navigation classes={'header__nav'} />
          {/* <MobileMenu loggedIn={loggedIn} classes={'header__nav'} /> */}
        </Header>
      )}
      <Outlet />
      {isFooter && <Footer />}
    </>
  );
};

export default Root;
