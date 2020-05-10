import { useSelector } from 'react-redux';
import Header from '../../components/common/Header';
import React from 'react';
const HeaderContainer = () => {
  const { user } = useSelector(({ user }) => ({ user: user.user }));
  return <Header user={user} />;
};

export default HeaderContainer;
