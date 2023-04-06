import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import SplashHeader from './SplashHeader';
import SplashBodySearch from './SplashBodySearch';
import SplashOptions from './SplashOptions';
import SplashCities from './SplashCities';
import SplashCountries from './SplashCountries';
import Footer from '../generalDesignComponents/Footer';
import UserMenuModal from '../universalModals/UserMenuModal';

interface SplashPageProps {}

const SplashPage: FC<SplashPageProps> = () => {
  const [menuModal, setMenuModal] = useState(false);
  const modalStates = { menuModal, setMenuModal };
  const sessionUser = useSelector((state: RootState) => state.session.user);

  if (sessionUser) {
    return <Redirect to="/deliverypickup" />;
  }

  return (
    <>
      <SplashHeader modalStates={modalStates} />
      <SplashBodySearch />
      <SplashOptions />
      <SplashCities />
      <SplashCountries />
      <Footer />
      {menuModal && <UserMenuModal modalStates={modalStates} />}
    </>
  );
};

export default SplashPage;
